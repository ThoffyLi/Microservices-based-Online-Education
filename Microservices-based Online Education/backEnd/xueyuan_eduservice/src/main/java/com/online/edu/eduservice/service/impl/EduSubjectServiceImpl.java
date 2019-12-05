package com.online.edu.eduservice.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.online.edu.eduservice.entity.EduSubject;
import com.online.edu.eduservice.entity.dto.OneSubjectDto;
import com.online.edu.eduservice.entity.dto.TwoSubjectDto;
import com.online.edu.eduservice.handler.EduException;
import com.online.edu.eduservice.mapper.EduSubjectMapper;
import com.online.edu.eduservice.service.EduSubjectService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 课程科目 服务实现类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-18
 */
@Service
public class EduSubjectServiceImpl extends ServiceImpl<EduSubjectMapper, EduSubject> implements EduSubjectService {



    @Override
    public boolean saveTwoLevel(EduSubject eduSubject) {
        // 判断二级分类是否存在
        EduSubject eduSubjectExist = this.existTwoSubject(eduSubject.getTitle(), eduSubject.getParentId());
        if (eduSubjectExist == null){
            int insert = baseMapper.insert(eduSubject);
            return insert>0;
        }
        return false;
    }



    @Override
    public boolean saveOneLevel(EduSubject eduSubject) {
        // 判断此一级分类是否存在： 存在则不添加
        EduSubject eduSubjectExist = this.existOneSubject(eduSubject.getTitle());
        if (eduSubjectExist == null){
            eduSubject.setParentId(0L);
            int insert = baseMapper.insert(eduSubject);
            return insert > 0;
        }

        return false;
    }



    @Override
    public boolean deleteSubjectById(Long id) {
        //判断一级分类下面有二级分类
        //根据parent_id 查询
        QueryWrapper<EduSubject> wrapper = new QueryWrapper<>();
        wrapper.eq("parent_id",id);
        Integer count = baseMapper.selectCount(wrapper);
        if (count > 0){// 删除它自己和所有子类
            int result1 = baseMapper.deleteById(id);
            QueryWrapper<EduSubject> wrapper1 = new QueryWrapper();
            wrapper1.eq("parent_id",id);
            int result2 = baseMapper.delete(wrapper1);
            return result1 > 0 || result2 > 0;
        }
        else {//没有二级分类，进行删除
            int result = baseMapper.deleteById(id);
            return result > 0;
        }
    }



    @Override
    public List getSubjectList() {
        //查询所有的一级分类
        QueryWrapper<EduSubject> wrapper1 = new QueryWrapper<>();
        wrapper1.eq("parent_id",0);
        List<EduSubject> allOneSubjects = baseMapper.selectList(wrapper1);
        //查询所有的二级分类
        QueryWrapper<EduSubject> wrapper2 = new QueryWrapper<>();
        wrapper2.ne("parent_id",0);
        List<EduSubject> allTwoSubjects = baseMapper.selectList(wrapper2);

        List<OneSubjectDto> oneSubjectDtoList = new ArrayList<>();
        //首先构建一级分类,每个EduSubject对象转换为 OneSubjectDto
        for (int i = 0; i < allOneSubjects.size(); i++){
            EduSubject eduOneSubject = allOneSubjects.get(i);
            OneSubjectDto oneSubjectDto = new OneSubjectDto();
            // 把每个EduSubject 对象转换成 OneSubjectDto
            BeanUtils.copyProperties(eduOneSubject,oneSubjectDto);
            oneSubjectDtoList.add(oneSubjectDto);

            //获取一级分类的所有二级分类，把每个二级分类添加到一级分类对象中oneSubjectDto.setChildren(list)
            List<TwoSubjectDto> twoSubjectDtoList = new ArrayList<>();
            for (int m = 0; m < allTwoSubjects.size(); m++){
                EduSubject eduTwoSubject = allTwoSubjects.get(m);
                // 判断是否是当前一级分类的子类
                if (eduTwoSubject.getParentId().equals(eduOneSubject.getId())){

                    TwoSubjectDto twoSubjectDto = new TwoSubjectDto();
                    BeanUtils.copyProperties(eduTwoSubject,twoSubjectDto);

                    twoSubjectDtoList.add(twoSubjectDto);
                }
            }
            oneSubjectDto.setChildren(twoSubjectDtoList);
        }

        return oneSubjectDtoList;

    }


    @Override
    public List<String> importSubject(MultipartFile file) {

        try{
            // 1. 获取文件输入流
            InputStream in = file.getInputStream();
            // 2.创建workbook
            Workbook workbook = new HSSFWorkbook(in);
            // 3. workbook获取sheet
            Sheet sheet = workbook.getSheetAt(0);

            List<String> msg = new ArrayList<>();
            // 4.sheet获取row 从第二行开始循环遍历,
            int lastRowNum = sheet.getLastRowNum();
            for (int i = 1; i <= lastRowNum; i++){
                Row row = sheet.getRow(i);
                if (row == null){
                    // 行为空
                    String row_missing = "Row " + i + " is empty";
                    msg.add(row_missing);
                    continue;
                }
                // 5.row 获取cell
                Cell cellOne = row.getCell(0);
                if (cellOne == null){
                    String cellone_missing = "CellOne " + i + " is empty";
                    msg.add(cellone_missing);
                    continue;
                }

                Cell cellTwo = row.getCell(1);
                if (cellTwo == null){
                    String celltwo_missing = "CellTwo " + i + " is empty";
                    msg.add(celltwo_missing);
                    continue;
                }
                // 6. cell获取cell值
                String cellOneValue = cellOne.getStringCellValue();

                //加入数据库
                //一级分类
                //因为excel里面有重复的一级分类，所以添加之前先判断，如果不存在再添加
                EduSubject eduSubjectExist = this.existOneSubject(cellOneValue);
                Long id_parent = null;
                if (eduSubjectExist == null){
                    // 不存在，添加
                    EduSubject eduSubject = new EduSubject();
                    eduSubject.setTitle(cellOneValue);
                    eduSubject.setParentId(0L);
                    eduSubject.setSort(0);
                    baseMapper.insert(eduSubject);
                    id_parent = eduSubject.getId();
                }else{
                    //存在，不添加，把一级分类id赋值id_parent
                    id_parent = eduSubjectExist.getId();
                }
                // 二级分类
                String cellTwoValue = cellTwo.getStringCellValue();
                EduSubject twoSubjectExist  = this.existTwoSubject(cellOneValue, id_parent);
                if (twoSubjectExist == null){
                    EduSubject twoSubject = new EduSubject();
                    twoSubject.setTitle(cellTwoValue);
                    twoSubject.setParentId(id_parent);
                    twoSubject.setSort(0);
                    baseMapper.insert(twoSubject);
                }
            }
            return msg;
        }catch (Exception e){
            e.printStackTrace();
            throw new EduException(20001, "Import Failure!");
        }
    }



    // 判断数据库表是否存在一级分类
    private EduSubject existOneSubject(String name){
        QueryWrapper<EduSubject> wrapper = new QueryWrapper<>();
        wrapper.eq("title",name);
        wrapper.eq("parent_id","0");
        EduSubject eduSubject = baseMapper.selectOne(wrapper);
        return eduSubject;
    }

    // 判断数据库表是否存在二级分类
    private EduSubject existTwoSubject(String name, Long parent_id){
        QueryWrapper<EduSubject> wrapper = new QueryWrapper<>();
        wrapper.eq("title",name);
        wrapper.eq("parent_id",parent_id);
        EduSubject eduSubject = baseMapper.selectOne(wrapper);
        return eduSubject;
    }

}
