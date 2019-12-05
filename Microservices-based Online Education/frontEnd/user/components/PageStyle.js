import React, { Component } from 'react';

export class PageStyle extends Component{
  render() {
    return (
      <style jsx>{`
        .c-master {
          color: #68cb9b;
        }
        .bg-orange {
          background-color: #68cb9b;
        }
        .nav li.current a,
        .nav li a:hover,
        .h-r-login li a:hover,
        .h-r-login li a:hover,
        .c-tab-title a.current,
        .c-btn-2,
        .i-teach-wrap:hover a,
        .paging a,
        .paging a:hover,
        .paging a.current,
        #footer,
        .u-m-dd ul li a:hover,
        .u-m-dd ul li.current a,
        .d-s-head-tab a.current {
          border-color: #68cb9b;
          color: #68cb9b;
        }
        .lh-menu ul li.lh-menu-stair ol li.lh-menu-second a.current-2,
        .lh-menu ul li.lh-menu-stair li.lh-menu-second a.current-2,
        .lh-menu
          ul
          li.lh-menu-stair
          ol
          li.lh-menu-second
          a.current-2
          .lh-menu-i-2,
        .lh-menu ul li.lh-menu-stair li.lh-menu-second a.current-2 .lh-menu-i-2,
        .lh-menu-second a.current-2 span.fr,
        #t-infor-menu p a.current,
        .i-art-title:hover,
        .q-sort-wrap span.current {
          border-color: #68cb9b;
          color: #68cb9b;
        }
        .clearfix:after,
        .clearfix:before {
          content: "";
          display: table;
          font-size: 0 !important;
          line-height: 0 !important;
          height: 0 !important;
        }
        .clearfix:after {
          clear: both;
        }
        .clear {
          clear: both;
          display: block;
          overflow: hidden;
          visibility: hidden;
          width: 0;
          height: 0;
        }
        .fl {
          float: left;
        }
        .fr {
          float: right;
        }
        .pr {
          position: relative;
        }
        .pa {
          position: absolute;
        }
        .f-fH {
          font-family: SimHei;
        }
        .f-fM {
          font-family: "Microsoft YaHei";
        }
        .f-fA {
          font-family: SimSun;
        }
        .f-fG {
          font-family: Georgia;
        }
        .unBg {
          background: 0 0 !important;
        }
        .unBr {
          border: none !important;
        }
        .unFw {
          font-weight: 400;
        }
        .dis {
          display: block;
        }
        .disIb {
          display: inline-block;
        }
        .undis {
          display: none;
        }
        .of {
          overflow: hidden;
        }
        .ov {
          overflow: visible;
        }
        .vam {
          vertical-align: middle;
        }
        .tal {
          text-align: left;
        }
        .tac {
          text-align: center;
        }
        .tar {
          text-align: right;
        }
        .hand {
          cursor: pointer;
        }
        .fsize12 {
          font-size: 12px;
        }
        .fsize14 {
          font-size: 14px;
        }
        .fsize16 {
          font-size: 16px;
        }
        .fsize18 {
          font-size: 18px;
        }
        .fsize20 {
          font-size: 20px;
        }
        .fsize24 {
          font-size: 24px;
        }
        .fsize34 {
          font-size: 34px;
        }
        .mt5 {
          margin-top: 5px;
        }
        .mr5 {
          margin-right: 5px;
        }
        .ml5 {
          margin-left: 5px;
        }
        .mt10 {
          margin-top: 10px;
        }
        .mr10 {
          margin-right: 10px;
        }
        .mb10 {
          margin-bottom: 10px;
        }
        .ml10 {
          margin-left: 10px;
        }
        .mt15 {
          margin-top: 15px;
        }
        .mr15 {
          margin-right: 15px;
        }
        .mb15 {
          margin-bottom: 15px;
        }
        .ml15 {
          margin-left: 15px;
        }
        .mt20 {
          margin-top: 20px;
        }
        .mr20 {
          margin-right: 20px;
        }
        .mb20 {
          margin-bottom: 20px;
        }
        .ml20 {
          margin-left: 20px;
        }
        .mt30 {
          margin-top: 30px;
        }
        .mr30 {
          margin-right: 30px;
        }
        .mb30 {
          margin-bottom: 30px;
        }
        .ml30 {
          margin-left: 30px;
        }
        .mt40 {
          margin-top: 40px;
        }
        .mr40 {
          margin-right: 40px;
        }
        .mb40 {
          margin-bottom: 40px;
        }
        .ml40 {
          margin-left: 40px;
        }
        .mt50 {
          margin-top: 50px;
        }
        .mr50 {
          margin-right: 50px;
        }
        .mb50 {
          margin-bottom: 50px;
        }
        .ml50 {
          margin-left: 50px;
        }
        .pt10 {
          padding-top: 10px;
        }
        .pr10 {
          padding-right: 10px;
        }
        .pb10 {
          padding-bottom: 10px;
        }
        .pl10 {
          padding-left: 10px;
        }
        .pt15 {
          padding-top: 15px;
        }
        .pr15 {
          padding-right: 15px;
        }
        .pb15 {
          padding-bottom: 15px;
        }
        .pl15 {
          padding-left: 15px;
        }
        .pt20 {
          padding-top: 20px;
        }
        .pr20 {
          padding-right: 20px;
        }
        .pb20 {
          padding-bottom: 20px;
        }
        .pl20 {
          padding-left: 20px;
        }
        .pt30 {
          padding-top: 30px;
        }
        .pt50 {
          padding-top: 50px;
        }
        .pr50 {
          padding-right: 50px;
        }
        .pb50 {
          padding-bottom: 50px;
        }
        .pl50 {
          padding-left: 50px;
        }
        .icon14 {
          display: inline-block;
          height: 14px;
          width: 14px;
          vertical-align: middle;
        }
        .icon16 {
          display: inline-block;
          height: 16px;
          width: 16px;
          vertical-align: middle;
        }
        .icon18 {
          display: inline-block;
          height: 18px;
          width: 18px;
          vertical-align: middle;
        }
        .icon20 {
          display: inline-block;
          height: 20px;
          width: 20px;
          vertical-align: middle;
        }
        .icon24 {
          display: inline-block;
          height: 24px;
          width: 24px;
          vertical-align: middle;
        }
        .icon30 {
          display: inline-block;
          height: 30px;
          width: 30px;
          vertical-align: middle;
        }
        .txtOf {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .hLh20 {
          height: 20px;
          line-height: 20px;
        }
        .hLh30 {
          height: 30px;
          line-height: 30px;
        }
        .col-7 {
          width: 70%;
        }
        .col-3 {
          width: 30%;
        }
        .lt-ie9 .col-7,
        .lt-ie9.lt-ie8 .col-7 {
          width: 75%;
        }
        .lt-ie9 .col-3,
        .lt-ie9.lt-ie8 .col-3 {
          width: 25%;
        }
        .container {
          margin-left: auto;
          margin-right: auto;
          width: 1160px;
        }
        .c-green {
          color: #14ba4c;
        }
        .c-yellow {
          color: #fc0;
        }
        .c-orange {
          color: #ff8723;
        }
        .c-blue {
          color: #3580de;
        }
        .c-red {
          color: #cf3f3f;
        }
        .c-333 {
          color: #333;
        }
        .c-666 {
          color: #666;
        }
        .c-999 {
          color: #999;
        }
        .c-ccc {
          color: #ccc;
        }
        .c-fff {
          color: #fff;
        }
        .bg-green {
          background-color: #14ba4c;
        }

        .bg-yellow {
          background-color:rgb(208, 230, 16);
        }


        .bg-fa {
          background-color: #fafafa;
        }
        .c-btn-3 {
          border-color: #fc0;
          color: #fc0;
        }
        .d-t-icon-1,
        .d-t-icon-2,
        .d-t-icon-3,
        .d-t-icon-4,
        .dClose,
        .dpIcon,
        .g-a-title em,
        .h-r-s-box .s-btn em,
        .icon-close,
        .lh-p-icon,
        .lh-playing span em,
        .login-icon,
        .m-tree-icon,
        .news-icon,
        .no-data-ico,
        .noter-dy em,
        .noter-zan em,
        .o-c-icon,
        .p-h-goback em,
        .q-hd,
        .q-share-icon,
        .q-tw,
        .r-fixed-ul li a em,
        .scIcon,
        .shareIcon,
        .u-a-cw,
        .u-a-zq,
        .v-play-btn em,
        .h-l-nav li .hl-sec-nav dd a em,
        .icon80,
        .icon14,
        .icon20,
        .s-car-close,
        .c-pay-problem em,
        .pay-error-btn a em,
        .cou-arrow-down,
        .cou-arrow-up {
          background: url(../img/icon.png) no-repeat;
        }
        .h-r-s-box .s-btn em {
          background-position: 0 0;
        }
        .login-icon {
          background-position: 0 -29px;
        }
        .news-icon {
          background-position: 0 -55px;
        }
        .shareIcon {
          background-position: 0 -89px;
        }
        .scIcon {
          background-position: 0 -113px;
        }
        .sc-end .scIcon {
          background-position: 0 -137px;
        }
        .m-tree-icon {
          background-position: 0 -195px;
        }
        a.current-1 .m-tree-icon {
          background-position: 0 -212px;
        }
        .lh-p-icon {
          background-position: 0 -234px;
        }
        a.current-2 .lh-p-icon {
          background-position: 0 -254px;
        }
        .lh-playing span em {
          background-position: -76px -251px;
        }
        .no-data-ico {
          background-position: -467px 0;
        }
        .v-play-btn em {
          background-position: -43px -67px;
        }
        .noter-dy em {
          background-position: -42px -160px;
        }
        .noter-dy:hover em {
          background-position: -42px -139px;
        }
        .noter-zan em {
          background-position: -42px -187px;
        }
        .noter-zan:hover em {
          background-position: -42px -265px;
        }
        .dClose,
        .icon-close {
          background-position: -42px -215px;
        }
        .dClose:hover,
        .icon-close:hover {
          background-position: -42px -244px;
        }
        .q-tw {
          background-position: -72px -163px;
        }
        .q-hd {
          background-position: -72px -188px;
        }
        .q-share-icon {
          background-position: -72px -215px;
        }
        .g-a-title em {
          background-position: -72px -247px;
        }
        .u-a-cw {
          background-position: -113px -188px;
        }
        .u-a-zq {
          background-position: -113px -163px;
        }
        .p-h-goback em {
          background-position: -113px -213px;
        }
        .dpIcon {
          background-position: -142px -56px;
        }
        .dpOpen .dpIcon {
          background-position: -142px -83px;
        }
        .o-c-icon {
          background-position: -142px -111px;
        }
        .d-t-icon-1 {
          background-position: -92px 0;
        }
        .d-t-icon-2 {
          background-position: -230px 0;
        }
        .d-t-icon-3 {
          background-position: -180px 0;
        }
        .d-t-icon-4 {
          background-position: -39px 0;
        }
        .r-fixed-ul li a em.r-f-icon-1 {
          background-position: -180px -55px;
        }
        .r-fixed-ul li a em.r-f-icon-2 {
          background-position: -180px -105px;
        }
        .r-fixed-ul li a em.r-f-icon-3 {
          background-position: -178px -155px;
        }
        .r-fixed-ul li a em.r-f-icon-4 {
          background-position: -181px -203px;
        }
        .shop-car-num {
          position: absolute;
          left: 27px;
          top: 2px;
          color: #ea562e;
          font-size: 12px;
          font-family: "Georgia";
          width: 14px;
          height: 14px;
          display: inline-block;
          text-align: center;
          background-color: #fff;
          border-radius: 8px;
          line-height: 10px;
          border: 1px solid #ea562e;
        }
        .c-shop-car-wrap a {
          border: 1px solid #fc0;
          text-align: center;
          border-radius: 20px;
          padding: 0 8px;
          color: #fc0;
          display: inline-block;
          font: 18px/36px "Microsoft YaHei";
          height: 36px;
          cursor: pointer;
          position: relative;
          width: 140px;
          transition: all 0.3s ease 0s;
        }
        .c-shop-car-wrap a:hover {
          opacity: 0.92;
          text-decoration: none;
        }
        .open-o-c .o-c-icon,
        .open-o-c.o-c-btn a:hover .o-c-icon {
          background-position: -142px -131px;
        }
        .o-c-btn a:hover .o-c-icon {
          background-position: -142px -151px;
        }
        .lt-ie9 .cc-mask,
        .lt-ie9.lt-ie8 .cc-mask,
        .u-face-pic a {
          background: url(../img/black-mask.png) repeat 0 0;
        }
        .p-h-v-wrap {
          background: url(../img/v-play-bg.jpg) no-repeat 50% 50% / cover;
        }
        .lt-ie9 .p-h-v-wrap,
        .lt-ie9.lt-ie8 .p-h-v-wrap {
          background: url(../img/v-play-bg.jpg) no-repeat 50% 50%;
        }
        .sf-lr-wrap a.wb-sf {
          background: url(../img/wb-icon-32.png) no-repeat 50% 50%;
        }
        .sf-lr-wrap a.wb-sf:hover {
          background: url(../img/wb-icon-hover-32.png) no-repeat 50% 50%;
        }
        .sf-lr-wrap a.wx-sf {
          background: url(../img/wx-icon-32.png) no-repeat 50% 50%;
        }
        .sf-lr-wrap a.wx-sf:hover {
          background: url(../img/wx-icon-hover-32.png) no-repeat 50% 50%;
        }
        .sf-lr-wrap a.qq-sf {
          background: url(../img/qq-icon-32.png) no-repeat 50% 50%;
        }
        .sf-lr-wrap a.qq-sf:hover {
          background: url(../img/qq-icon-hover-32.png) no-repeat 50% 50%;
        }
        .i-box {
          background-color: #fff;
          border: 1px solid #f0f0f0;
          padding: 0 15px 20px;
          overflow: hidden;
        }
        .blue-btn,
        .comm-btn,
        .goBack-btn,
        .order-submit {
          border: 1px solid;
          border-radius: 16px;
          display: inline-block;
          text-align: center;
          height: 32px;
          line-height: 32px;
          padding: 0 12px;
        }
        .comm-btn {
          padding: 0 8px;
        }
        .c-btn-1 {
          border-color: #fff;
          color: #fff;
          width: 120px;
          font-size: 18px;
        }
        .c-btn-2,
        .c-btn-3,
        .c-btn-4,
        .c-btn-5,
        .c-btn-7 {
          border-radius: 20px;
          width: 160px;
          font-size: 20px;
          height: 36px;
          line-height: 36px;
        }
        .c-btn-4,
        .c-btn-5 {
          border-radius: 0;
          color: #fff;
          width: 220px;
          height: 42px;
          line-height: 42px;
        }
        .c-btn-5 {
          background: #264863;
          width: auto;
          display: block;
        }
        .c-btn-6 {
          border-color: #14ba4c;
          color: #14ba4c;
          width: auto;
          font-size: 12px;
          height: 18px;
          line-height: 18px;
        }
        .c-btn-7 {
          background: #264863;
          border-radius: 0;
          color: #fff;
        }
        .blue-btn {
          background: #264863;
          border-radius: 3px;
          color: #fff;
          font-size: 14px;
          width: 90px;
        }
        .e-login-btn,
        .e-register-btn,
        .order-submit {
          background: #985054;
          border-radius: 3px;
          color: #fff;
          width: 180px;
          font-size: 16px;
        }
        .goBack-btn {
          background: #e2e2e2;
          border: none;
          border-radius: 3px;
          color: #666;
          font-size: 14px;
        }
        .blue-btn:hover,
        .comm-btn:hover,
        .e-login-btn:hover,
        .e-register-btn:hover,
        .goBack-btn:hover,
        .order-submit:hover {
          text-decoration: none;
          opacity: 0.92;
          -moz-opacity: 0.92;
          filter: alpha(opacity=92);
        }
        .comm-title {
          overflow: hidden;
          clear: both;
          margin: 40px 0 30px;
        }
        .comm-title h2 span {
          font-size: 26px;
          font-family: simhei;
        }
        .comm-course-list ul {
          margin-left: -30px;
        }
        .comm-course-list li {
          float: left;
          width: 25%;
        }
        .lt-ie9.lt-ie8 .comm-course-list li {
          width: 24.98%;
        }
        .lt-ie9 .u-course-list .comm-course-list li,
        .lt-ie9.lt-ie8 .u-course-list .comm-course-list li {
          width: 33.33%;
        }
        .comm-course-list li .cc-l-wrap {
          display: block;
          margin: 0 0 50px 30px;
          overflow: hidden;
        }
        .course-img {
          position: relative;
          overflow: hidden;
        }
        .img-responsive {
          max-width: 100%;
          height: auto;
          display: block;
          transition: 0.8s;
          -webkit-transition: 0.8s;
        }
        .jgTag {
          display: inline-block;
          padding: 1px 12px;
          text-align: center;
          height: 20px;
        }
        .cc-mask {
          background: rgba(0, 0, 0, 0.4);
          height: 100%;
          left: 0;
          opacity: 0;
          filter: alpha(opacity=0);
          position: absolute;
          right: 0;
          top: 0;
          transition: all 0.3s ease 0s;
          width: 100%;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .cc-mask .c-btn-1 {
          left: 50%;
          margin-left: -72px;
          margin-top: -16px;
          position: absolute;
          top: 100%;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .lt-ie9 .cc-mask .c-btn-1,
        .lt-ie9.lt-ie8 .cc-mask .c-btn-1 {
          top: 120%;
        }
        .comm-course-list li:hover .img-responsive {
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
        }
        .comm-course-list li:hover .cc-mask {
          opacity: 1;
          filter: alpha(opacity=100);
        }
        .comm-course-list li:hover .cc-mask .c-btn-1 {
          top: 50%;
        }
        #aCoursesList,
        .i-question,
        .u-body {
          padding-bottom: 80px;
        }
        .course-r-list li {
          padding: 10px 0 10px 120px;
          position: relative;
          min-height: 62px;
        }
        .course-r-list li .course-r-pic {
          width: 110px;
          position: absolute;
          left: 0;
          top: 10px;
          overflow: hidden;
        }
        .course-r-pic img {
          display: block;
          max-width: 100%;
          transition: 0.8s;
          -webkit-transition: 0.8s;
        }
        .course-r-list li:hover .course-r-pic img {
          transform: scale(1.1);
          -webkit-transform: scale(1.1);
        }
        #header {
          background-color: #fff;
          box-shadow: 0 2px 3px rgba(7, 0, 2, 0.04);
          padding: 30px 0;
          position: relative;
        }
        .lt-ie9 #header,
        .lt-ie9.lt-ie8 #header {
          border-bottom: 1px solid #f2f2f2;
        }
        #logo {
          float: left;
          width: 220px;
          height: 72px;
          overflow: hidden;
          margin: 0 auto;
        }
        #logo a {
          display: table-cell;
          vertical-align: middle;
          height: 72px;
        }
        #logo a img {
          display: block;
          max-width: 100%;
          height: auto;
          vertical-align: middle;
        }
        .nav {
          padding: 15px 0 0 50px;
        }
        .nav,
        .nav li,
        .nav li a {
          float: left;
        }
        .nav li a {
          border-bottom: 2px solid transparent;
          color: #666;
          display: block;
          font-size: 20px;
          line-height: 50px;
          padding: 0 10px;
          margin: 0 10px;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .h-r-login li a:hover,
        .nav li a:hover,
        .nav li.current a {
          text-decoration: none;
        }
        .h-r-login,
        .h-r-search {
          float: right;
          padding-top: 15px;
        }
        .h-r-login li {
          float: left;
          margin-left: 10px;
          position: relative;
        }
        .h-r-login li a {
          cursor: pointer;
          line-height: 50px;
          color: #666;
          font-size: 16px;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .h-r-login li.h-r-user a img {
          border-radius: 50%;
          width: 30px;
          height: 30px;
        }
        .h-r-login li.h-r-user span {
          max-width: 60px;
          height: 17px;
          font-size: 16px;
          line-height: 16px;
          overflow: hidden;
        }
        .red-point {
          position: absolute;
          right: -4px;
          top: 8px;
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cb2020;
          text-indent: -9999px;
        }
        .h-r-search {
          margin: 10px 20px 0 0;
        }
        .h-r-s-box {
          display: block;
          position: relative;
        }
        .h-r-s-box input {
          border: 1px solid #e8e8e8;
          border-radius: 20px;
          color: #aaa;
          padding: 0 15px;
          font-family: "Microsoft YaHei";
          width: 140px;
          height: 30px;
          line-height: 30px;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .h-r-s-box .s-btn {
          background: 0 0;
          border: none;
          position: absolute;
          right: 3px;
          top: 0;
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
        .h-r-s-box input:focus {
          border-color: #ddd;
          color: #666;
          width: 150px;
        }
        .h-mobile-mask,
        .head-mobile,
        .mw-nav,
        .mw-nav-btn {
          display: none;
        }
        .lh-menu {
          margin: 0 10px;
          padding: 0;
        }
        .lh-menu ul li.lh-menu-stair {
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
        #lh-menu ul li.lh-menu-stair dl dd a:hover,
        .lh-menu ul li.lh-menu-stair a:hover,
        .lh-menu ul li.lh-menu-stair ol li.lh-menu-second a:hover {
          background: #fbfbfb;
          transition: 0.3s;
          -webkit-transition: 0.3s;
          text-decoration: none;
        }
        .lh-menu ul li.lh-menu-stair a {
          background: #f8f8f8;
          color: #333;
          display: block;
          font: 16px/36px "Microsoft YaHei";
          height: 36px;
          padding: 0 10px;
          overflow: hidden;
        }
        .lh-menu ul li.lh-menu-stair a.current-1 {
          background: #f4f4f4;
          border-bottom: 1px solid #e6e6e6;
        }
        .lh-menu-i-1 {
          background-color: #fff;
          border: 1px solid #bbb;
          border-radius: 50%;
          text-align: center;
          line-height: 12px;
        }
        .lh-menu-i-1 font {
          color: #4e4e4e;
          font: 18px/24px "Microsoft YaHei";
        }
        .lh-menu ul li.lh-menu-stair ol li.lh-menu-second a {
          background: #fff;
          color: #555;
          display: block;
          font: 14px/32px "Microsoft YaHei";
          height: 32px;
          padding: 0 10px;
          margin-top: 5px;
          overflow: hidden;
        }
        .lh-menu-i-2 {
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 50%;
          width: 12px;
          height: 12px;
        }
        .lh-menu-second a span.fr .lh-p-icon {
          opacity: 0.6;
          -moz-opacity: 0.6;
          filter: alpha(opacity=88);
        }
        .lh-menu-second a span.fr {
          color: #bbb;
          font-size: 12px;
        }
        .lh-menu-second a span.fr .free-icon,
        .lh-menu-second a.current-2 span.fr .lh-p-icon {
          opacity: 1;
          -moz-opacity: 1;
          filter: alpha(opacity=100);
        }
        #lh-menu ul li.lh-menu-stair dl dd a {
          color: #666;
          display: block;
          font: 12px/30px "Microsoft YaHei";
          height: 30px;
          padding: 0 10px 0 20px;
          overflow: hidden;
        }
        #lh-menu ul li.lh-menu-stair dl dd a.lh-playing,
        #lh-menu ul li.lh-menu-stair dl dd a.lh-playing span,
        #lh-menu ul li.lh-menu-stair dl dd a.lh-playing:hover {
          cursor: text;
        }
        #lh-menu a.no-jd-play span,
        #lh-menu ul li.lh-menu-stair dl dd a span {
          font-family: Arial;
          font-size: 12px;
          color: #aaa;
        }
        .lh-menu ul ol,
        .lh-menu ul ol dl {
          display: none;
        }
        .free-icon {
          border: 1px solid #72cd91;
          border-radius: 20px;
          color: #72cd91;
          display: inline-block;
          height: 14px;
          line-height: 14px;
          font-size: 12px;
          padding: 0 8px;
        }
        .lh-menu ul ul.no-parent-node {
          display: block;
        }
        .lh-menu ul ul.no-parent-node li.lh-menu-second a {
          background: 0 0;
          font-size: 14px;
        }
        .lh-bj-list ul li {
          border-bottom: 1px solid #e9e9e9;
          padding: 12px 5px 2px 65px;
          position: relative;
          min-height: 50px;
        }
        .noter-pic {
          position: absolute;
          left: 0;
          top: 12px;
        }
        .noter-pic img {
          border-radius: 50%;
          display: block;
          height: 50px;
          width: 50px;
        }
        .noter-txt {
          line-height: 180%;
          color: #4e4e4e;
          font-size: 14px;
        }
        .lh-n-cz {
          visibility: hidden;
        }
        .lh-list-more {
          margin: 10px 0;
        }
        .lh-list-more a {
          border: 1px dotted #e2e2e2;
          display: block;
          height: 30px;
          font: 14px/30px Arial;
          color: #666;
          text-align: center;
        }
        .lh-list-more a:hover {
          border-color: #1755a0;
          color: #1755a0;
          text-decoration: none;
        }
        .question-list.lh-bj-list li {
          padding-bottom: 8px;
        }
        .noter-dy,
        .noter-zan {
          color: #666;
          cursor: pointer;
        }
        .noter-dy:hover,
        .noter-zan:hover {
          color: #3facea;
          text-decoration: none;
        }
        .noter-dy *,
        .noter-zan * {
          vertical-align: middle;
        }
        .n-reply {
          display: none;
          margin-top: 8px;
        }
        .n-reply-wrap textarea {
          background: #fff;
          border: 1px solid #ddd;
          width: 98%;
          height: 48px;
          padding: 4px;
          font-size: 14px;
          color: #666;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .n-reply-wrap textarea:focus {
          border-color: #3facea;
        }
        .lh-reply-btn {
          background: #6acc7e;
          border: 1px solid #55c76c;
          border-radius: 3px;
          display: inline-block;
          height: 18px;
          width: 38px;
          text-align: center;
          font: 12px/18px Arial;
          color: #fff;
        }
        .lh-reply-btn:hover {
          background: #55c76c;
          color: #fff;
          text-decoration: none;
        }
        .n-reply-list {
          padding-left: 40px;
        }
        .n-reply-list dd {
          border-bottom: 1px solid #e9e9e9;
          padding: 5px 0 8px 0;
          position: relative;
        }
        .n-reply-list dd:last-child {
          border: none;
        }
        .n-reply-pic {
          position: absolute;
          left: -52px;
          top: 5px;
        }
        .n-reply-pic img {
          border-radius: 50%;
          display: block;
          height: 40px;
          width: 40px;
        }
        .u-select {
          border: 1px solid #ddd;
          padding: 0 8px;
          color: #666;
        }
        .time-bar-wrap {
          width: 100%;
          position: relative;
        }
        .lev-num-wrap {
          background: #e1e1e1;
          border-radius: 18px;
          width: 100%;
          height: 12px;
          position: relative;
        }
        .lev-num-bar {
          border-radius: 18px;
          width: 0;
          font-size: 0;
          position: absolute;
          left: 0;
          top: 0;
          height: 12px;
          z-index: 7;
          transition: 0.3s;
        }
        .lev-num {
          color: #fff;
          position: absolute;
          top: 1px;
          left: 10px;
          font-family: "Microsoft YaHei";
          font-size: 12px;
          line-height: 10px;
          z-index: 9;
        }
        .lev-num big,
        .lev-num small {
          font-size: 12px;
        }
        .lev-num small {
          color: #f2f2f2;
        }
        .no-data-wrap {
          margin: 50px auto;
          text-align: center;
        }
        .no-data-wrap .no-data-ico {
          width: 41px;
          height: 80px;
        }
        .path-wrap {
          margin: 20px 0;
          color: #ccc;
          line-height: 30px;
        }
        .v-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -32px 0 0 -32px;
          z-index: 9;
        }
        .v-play-btn em {
          width: 68px;
          height: 68px;
        }
        .v-play-btn:hover,
        .v-play-btn:hover em {
          opacity: 0.9;
          -moz-opacity: 0.9;
          filter: alpha(opacity=90);
          text-decoration: none;
        }
        .c-infor-title {
          height: 18px;
          overflow: hidden;
        }
        .c-infor-title span {
          border-left: 5px solid #333;
          color: #333;
          font-size: 16px;
          display: inline-block;
          line-height: 18px;
          padding-left: 10px;
        }
        .paging {
          padding: 50px 0 20px;
          text-align: center;
        }
        .paging a {
          border: 1px solid #ccc;
          border-radius: 40%;
          color: #666;
          display: inline-block;
          margin: 0 5px;
          height: 30px;
          width: 30px;
          text-align: center;
          line-height: 30px;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .paging a.current,
        .paging a.undisable {
          cursor: text;
        }
        .paging a.undisable:hover {
          border: 1px solid #ccc;
          border-radius: 40%;
          color: #666;
        }
        .paging a.current,
        .paging a:hover {
          border-radius: 50%;
          text-decoration: none;
        }
        .bMask {
          background: #000;
          opacity: 0.3;
          filter: alpha(opacity=30);
          position: fixed;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 99999;
        }
        .dialogWrap {
          background: #fff;
          position: absolute;
          left: 50%;
          transition: all 0.3s ease 0s;
          z-index: 9999999;
        }
        .d-s-head,
        .d-s-head-infor {
          border-bottom: 1px solid #e2e2e2;
          height: 40px;
          line-height: 40px;
          padding: 0 15px;
          width: 100%;
        }
        .d-s-head-txt,
        .d-s-head-txt-infor {
          color: #333;
          font-size: 16px;
        }
        .dClose {
          right: 10px;
          top: 15px;
        }
        .dClose:hover {
          text-decoration: none;
        }
        .d-t-icon-1,
        .d-t-icon-2,
        .d-t-icon-3,
        .d-t-icon-4 {
          left: 5px;
          top: 0;
          display: inline-block;
          vertical-align: middle;
          width: 40px;
          height: 45px;
        }
        .d-tips-1 p,
        .d-tips-2 p,
        .d-tips-3 p {
          padding-left: 60px;
          line-height: 180%;
        }
        .d-tips-1 {
          position: relative;
          width: 420px;
        }
        .d-tips-2 {
          position: relative;
          width: 400px;
        }
        .d-tips-7 {
          position: relative;
          width: 400px;
        }
        .d-tips-3 {
          position: relative;
        }
        .d-tips-6 {
          position: relative;
          width: 680px;
          max-height: 500px;
          overflow-y: auto;
          overflow-x: hidden;
          margin-right: -20px;
        }
        .uMenu {
          padding: 0;
          margin: 0;
        }
        .uMenu dl {
          margin-right: 15px;
        }
        .u-face-pic {
          border-radius: 50%;
          width: 100px;
          height: 100px;
          float: left;
          overflow: hidden;
          position: relative;
          margin-right: 20px;
        }
        .u-face-pic img {
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: block;
        }
        .u-face-pic a {
          bottom: -24px;
          left: 0;
          right: 0;
          width: 100%;
          display: block;
          text-align: center;
          height: 24px;
          line-height: 24px;
          position: absolute;
          -webkit-transition: 0.4s;
          -moz-transition: 0.4s;
          transition: 0.4s;
        }
        .u-face-pic:hover a {
          bottom: 0;
        }
        .stud-time-wrap {
          padding: 0 0 0 10px;
          overflow: hidden;
          height: 40px;
          line-height: 40px;
        }
        .fly_item {
          border: 2px solid #888;
          border-radius: 100%;
          height: 48px;
          opacity: 0.9;
          overflow: hidden;
          position: absolute;
          visibility: hidden;
          width: 48px;
        }
        .stud-time-wrap * {
          vertical-align: middle;
        }
        .stud-time big {
          font-family: Georgia;
          font-size: 30px;
          color: #4e4e4e;
        }
        .stud-time small {
          font-size: 14px;
          color: #777;
          margin: 0 3px;
        }
        .u-m-dd {
          border-top: 1px solid #ccc;
          margin-top: 15px;
        }
        .u-m-dd ul {
          border-bottom: 1px solid #ddd;
          padding: 20px 0 20px 30px;
        }
        .u-m-dd ul li {
          line-height: 32px;
        }
        .u-m-dd ul li a,
        .u-m-dd ul li span {
          display: block;
          transition: 0.3s;
          -webkit-transition: 0.3s;
          color: #4e4e4e;
          font-size: 18px;
        }
        .u-m-dd ul li span {
          cursor: default;
        }
        .u-m-dd ul li ol {
          padding: 10px 0 0 50px;
        }
        .u-m-dd ul li ol li a {
          font-size: 14px;
          color: #777;
        }
        .u-m-dd ul li a:hover {
          text-decoration: none;
        }
        .u-r-cont {
          border-left: 1px dotted #ddd;
          padding-left: 40px;
          min-height: 820px;
        }
        .lrWrap {
          width: 320px;
        }
        .d-s-head-tab {
          display: block;
          height: 40px;
        }
        .d-s-head-tab a {
          border-bottom: 1px solid transparent;
          color: #666;
          display: block;
          float: left;
          width: 100px;
          text-align: center;
          line-height: 40px;
          font-size: 18px;
        }
        .d-s-head-tab a:hover {
          text-decoration: none;
        }
        .e-l-jy {
          display: block;
          height: 20px;
          line-height: 20px;
          text-align: center;
        }
        .e-login-options li .lr-tip-wrap {
          margin-top: 5px;
          height: 18px;
          line-height: 18px;
        }
        .e-login-options li label {
          color: #4e4e4e;
          display: inline-block;
          vertical-align: middle;
          height: 32px;
          width: 30px;
          text-align: center;
          vertical-align: middle;
        }
        .e-login-options li input {
          background: #fff;
          border: 1px solid #ddd;
          color: #666;
          height: 38px;
          font: 16px/38px "Microsoft YaHei";
          width: 300px;
          padding-left: 16px;
          vertical-align: middle;
        }
        .h-left {
          width: 20%;
        }
        .h-right {
          width: 80%;
        }
        .h-l-title {
          height: 40px;
          border-bottom: 1px solid #e3e3e3;
        }
        .h-l-title span {
          font: 24px/40px "SimHei";
        }
        .h-l-nav {
          margin-top: 10px;
        }
        .h-l-nav li {
          border-bottom: 1px solid #e9e9e9;
          padding: 15px 20px;
        }
        .h-l-nav li span,
        .h-l-nav li a {
          font: 14px/20px "Microsoft YaHei";
          color: #333;
        }
        .h-l-nav li .hl-sec-nav {
          padding-top: 10px;
          padding-left: 22px;
        }
        .h-l-nav li .hl-sec-nav dd {
          padding: 8px 20px;
          position: relative;
        }
        .h-l-nav li .hl-sec-nav dd a em {
          background-position: -114px -250px;
          width: 14px;
          height: 14px;
          vertical-align: middle;
          position: absolute;
          left: 0;
          top: 10px;
          display: none;
        }
        .h-l-nav li .hl-sec-nav dd.current a em {
          display: inline-block;
        }
        .h-l-nav li .hl-sec-nav dd a:hover {
          text-decoration: none;
        }
        .h-l-nav li .hl-sec-nav dd.current a tt,
        .h-l-nav li .hl-sec-nav dd a:hover tt,
        .h-l-nav li.current a {
          color: #e7542b;
        }
        .h-l-nav li .hl-sec-nav dd a tt {
          font: 12px/20px "Microsoft YaHei";
          color: #333;
        }
        .h-right .h-r-wrap {
          margin-left: 30px;
          padding-left: 30px;
        }
        .h-right .h-r-title span {
          font-size: 16px;
          font-family: "Microsoft YaHei";
        }
        .h-l-cont {
          margin-top: 20px;
        }
        .h-l-cont p {
          color: #333;
          font: 12px/24px "Microsoft YaHei";
        }
        .order-step {
          height: 150px;
          overflow: hidden;
        }
        .order-step-bg-2 {
          background-position: 0 -151px;
        }
        .c-order-list {
          background-color: #fff;
          margin-top: 20px;
          border-bottom: 1px solid #e2e2e2;
        }
        .c-o-head {
          border-top: 1px solid #e2e2e2;
          border-bottom: 1px solid #e2e2e2;
          padding: 10px 0;
        }
        .c-o-head span {
          font: 12px/24px "Microsoft YaHei";
          color: #999;
        }
        .c-o-head li,
        .c-o-tbody li {
          float: left;
          width: 16%;
        }
        .c-o-head li .c-t-wz span {
          font-size: 14px;
          color: #666;
        }
        .c-o-head li.col52 {
          width: 52%;
          text-align: left;
        }
        .c-o-head li.col52 .c-t-wz {
          text-align: left;
          padding-left: 4px;
        }
        .c-o-head li div.c-t-wz {
          text-align: right;
          padding-right: 23px;
        }
        .c-head-li-16 {
          width: 11% !important;
        }
        .c-head-li-36 {
          width: 40% !important;
        }
        .c-head-li-80 {
          width: 89%;
        }
        .c-o-tbody {
          padding: 10px;
          border-bottom: 1px solid #e2e2e2;
        }
        .c-o-tbody .c-o-t-img {
          padding-right: 10px;
        }
        .c-o-tbody li div.c-t-wz {
          text-align: right;
          margin-top: 34px;
        }
        .c-pay-method {
          background-color: #fff;
          padding: 20px 0 20px 12px;
          border-top: 1px solid #e2e2e2;
          margin-top: 20px;
        }
        .c-p-left {
          float: left;
          padding-left: 40px;
        }
        .c-p-right {
          float: left;
          margin-left: 10px;
        }
        .c-p-title {
          font: 14px/18px "Microsoft YaHei";
          color: #333;
          border-left: 5px solid #333;
          margin-top: 20px;
          padding-left: 12px;
        }
        .c-couse-card {
          padding-top: 30px;
        }
        .c-couse-card p {
          font: 14px/18px "Microsoft YaHei";
          color: #666;
        }
        .buyB_payPlat {
          padding-left: 30px;
          padding-top: 30px;
        }
        .buyB_payPlat ul li {
          float: left;
          height: 55px;
          vertical-align: middle;
          width: 25%;
          min-width: 223px;
        }
        .buyB_payPlat ul li input {
          vertical-align: middle;
        }
        .buyB_payPlat ul li img {
          border: 1px solid #fff;
          vertical-align: middle;
          margin-left: 4px;
        }
        .buyB_payPlat ul li img:hover {
          border-color: #ff4800;
        }
        .buyText01 {
          width: 190px;
          height: 32px;
          border: 1px solid #985054;
          padding-left: 10px;
          color: #666;
          line-height: 32px;
          font-family: "Microsoft YaHei";
        }
        .buyCoupon_add2 {
          width: 78px;
          height: 36px;
          background-color: #985054;
          display: inline-block;
          color: #fff;
          font: 16px/36px "Microsoft YaHei";
          text-align: center;
        }
        .buyCoupon_add2:hover {
          background-color: #8d4549;
          text-decoration: none;
        }
        .order-btn {
          width: 322px;
          max-width: 100%;
          height: 50px;
          background-color: #e65429;
          text-align: center;
          font: 24px/50px "Microsoft YaHei";
          color: #fff;
          display: inline-block;
        }
        .order-btn:hover {
          background-color: #db481d;
          text-decoration: none;
        }
        .icon80 {
          width: 80px;
          height: 80px;
          display: inline-block;
          vertical-align: middle;
          background-position: -283px -13px;
        }
        .pay-font {
          font: 36px/80px "Microsoft YaHei";
          vertical-align: middle;
          margin-left: 35px;
        }
        .c-order-num {
          position: absolute;
          right: 121px;
          bottom: 0;
        }
        .order-list-item li {
          padding: 8px 0;
        }
        .order-list-item li.o-l-fir span {
          line-height: 30px;
        }
        .order-list-item li.o-l-fir em {
          margin-top: 5px;
        }
        .c-o-icon {
          background-position: -240px -125px;
        }
        .fsize30 {
          font-size: 30px;
        }
        .c-p-m {
          padding: 40px 0 70px;
        }

        .c-pay-problem {
          width: 100%;
          margin: 30px 0 45px;
          text-align: center;
        }
        .c-payerror-desc {
          width: 400px;
          padding: 0 60px;
        }
        .c-payerror-desc p {
          font: 18px/36px "Microsoft YaHei";
          color: #333;
          text-align: center;
        }
        .c-payerror-desc p span {
          font-size: 24px;
        }
        .pay-error-btn {
          margin-top: 55px;
          text-align: center;
        }
        .pay-error-btn a {
          padding: 12px 20px;
          display: inline-block;
          background-color: #e6532a;
        }
        .pay-error-btn a:hover,
        .jihu-btn:hover {
          background-color: #d84d26;
          text-decoration: none;
        }
        .pay-error-btn a tt {
          vertical-align: middle;
          font: 18px/25px "Microsoft YaHei";
          color: #fff;
        }
        .pay-error-btn a em {
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 10px;
          vertical-align: middle;
        }
        .pay-error-btn a .c-pay-btn1 {
          background-position: -234px -219px;
        }
        .pay-error-btn a .c-pay-btn2 {
          background-position: -234px -251px;
        }

        .line2 {
          border-bottom: 1px solid #e5e5e5;
        }
        .jihu-btn {
          border-radius: 3px;
          color: #fff;
          background-color: #e6532a;
          display: inline-block;
          font: 15px/24px "Hiragino Sans GB", "Microsoft YaHei";
          height: 24px;
          padding: 2px 25px;
        }
        .tab-integral th {
          background: #f0f0f0 none repeat scroll 0 0;
          border: 1px solid #ddd;
          color: #333;
          font-weight: normal;
          padding: 8px 10px;
        }
        .tab-integral td {
          border: 1px solid #ddd;
          color: #666;
          padding: 12px 10px;
          vertical-align: middle;
        }
        .integral-list ul li {
          float: left;
          margin: 40px 44px 0;
          width: 180px;
        }
        .u-c-card.tab-integral td {
          padding: 12px 5px;
        }
        .fbold {
          font-weight: bold;
        }
        .c-pay-problem em {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-position: -283px -111px;
        }
        .coupon-box {
          height: 36px;
          overflow: hidden;
          clear: both;
          width: auto;
        }
        .coupon-left {
          padding: 30px 20px 10px;
          text-align: center;
          background-color: #f9e9c5;
          border: 1px dotted #68cb9b;
        }
        .cou-left-num {
          font: 16px/29px "Microsoft YaHei";
          color: #68cb9b;
          padding: 0 17px;
          border: 1px solid #68cb9b;
          border-radius: 20px;
          display: inline-block;
        }
        .cou-money {
          color: #dd491e;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          display: inline-block;
          font-weight: 400;
          line-height: 56px;
        }
        .cou-money tt {
          font-size: 60px;
          font-style: italic;
        }
        .cou-money font {
          position: absolute;
          left: 45px;
          top: -10px;
        }
        .c-mon-wrap {
          height: 60px;
          overflow: hidden;
          position: relative;
        }
        .coupon-right {
          background-color: #68cb9b;
          padding: 26px;
        }
        .coupon-list li {
          float: left;
          width: 50%;
          margin-top: 40px;
          min-width: 325px;
        }
        .expired-state .coupon-left {
          background-color: #e6e6e6;
          border: 1px dotted #bdbdbd;
        }
        .expired-state .cou-left-num {
          border: 1px solid #b2b2b2;
          color: #b2b2b2;
        }
        .expired-state .cou-money {
          color: #b3b3b3;
        }
        .expired-state .coupon-right {
          background-color: #b3b3b3;
        }
        .expired-state li {
          position: relative;
        }
        .exp-chapter {
          position: absolute;
          left: 124px;
          top: 9px;
        }

        .ret-btn {
          width: 150px;
          height: 50px;
          background-color: #e7542a;
          display: inline-block;
          text-align: center;
        }
        .ret-btn:hover {
          text-decoration: none;
          background-color: #de4c22;
        }
        .ret-btn em {
          background-position: -239px -56px;
        }
        .lea-cou-btn em {
          background-position: -239px -91px;
        }
        .order-list-item li span {
          margin-top: 3px;
          display: inline-block;
        }
        .ret-btn tt {
          font: 18px/50px "Microsoft YaHei";
          color: #fff;
          margin-left: 10px;
          vertical-align: middle;
        }
        .s-c-icon em {
          background-position: -234px -160px;
        }

        .l-r-w-Inpt li label {
          color: #666;
          display: inline-block;
          font-size: 14px;
          text-align: right;
          width: 68px;
        }
        .l-r-w-Inpt li input.lTxt {
          background: #fff none repeat scroll 0 0;
          border: 1px solid #cfcfcf;
          box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1) inset;
          color: #666;
          height: 32px;
          line-height: 32px;
          padding: 0 10px;
          width: 260px;
        }
        .l-r-w-Inpt li input.lTxt.yzm {
          width: 100px;
        }
        .l-r-w-Inpt li input.lTxt:focus {
          border-color: #f1a181;
          box-shadow: 1px 1px 4px rgba(255, 72, 0, 0.1);
        }
        .login-btn {
          display: inline-block;
          height: 28px;
          text-align: left;
          width: 286px;
          background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(#ff7944),
            to(#ff4901)
          );
          background: -moz-linear-gradient(top, #ff7944, #f2f2f2);
          background: -ms-linear-gradient(top, #ff7944, #ff4901);
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff7944', endColorstr='#ff4901');
          border: 1px solid #ff4a03;
        }
        .login-btn input {
          background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
          border: medium none;
          color: #fff;
          font: 18px/28px "Hiragino Sans GB", "Microsoft YaHei", "΢���ź�";
          height: 28px;
          text-align: center;
          width: 286px;
        }
        .r-fix-box {
          width: 100%;
          height: 100%;
        }
        .r-fixed-ul {
          position: absolute;
          left: -49px;
          bottom: 200px;
        }
        .shopcar-box {
          height: 100%;
          width: 270px;
          transition: all 0.3s ease 0s;
          background-color: #eceaef;
          border-left: 4px solid #ea562e;
        }
        .s-car-box {
          width: 270px;
          height: 100%;
        }
        .c-4e {
          color: #4e4e4e;
        }
        .s-car-box-top {
          width: 100%;
          height: 38px;
          padding: 10px 15px;
        }
        .s-car-box-top {
          border-bottom: 1px solid #ddd;
          position: absolute;
          width: 240px;
          height: 30px;
          background-color: #eceaef;
        }
        .s-car-box-middle {
          padding: 55px 0;
        }
        .s-car-close {
          width: 12px;
          height: 12px;
          display: inline-block;
          background-position: -238px -195px;
          transition: all 0.3s ease 0s;
        }
        .s-car-close:hover {
          transform: rotate(180deg);
        }
        .addScar-elem {
          margin-right: -10px;
          max-height: 300px;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .addScar-list {
          clear: both;
          overflow: hidden;
          padding: 6px 0 0;
        }
        .a-s-l-c-name {
          float: left;
          width: 113px;
        }
        .a-s-l-c-name a:hover {
          color: #ea562e;
        }
        .s-car-box-bot {
          height: 50px;
          width: 100%;
        }
        .s-c-b {
          padding: 5px 110px 5px 5px;
          position: relative;
          height: 40px;
          position: relative;
        }
        .js-btn {
          width: 112px;
          height: 36px;
          position: absolute;
          right: 5px;
          top: 5px;
          background-color: #ea562e;
          transition: all 0.3s ease 0s;
          color: #fff;
          text-align: center;
          font: 16px/36px "Microsoft YaHei";
          display: inline-block;
        }
        .js-btn:hover {
          text-decoration: none;
          background-color: #dc4921;
        }
        .a-s-l-c-attr {
          float: left;
          line-height: 20px;
          margin-left: 5px;
          overflow: hidden;
          text-align: center;
          width: 65px;
        }
        .c-b-m-list li {
          padding: 10px;
          background-color: #f8f8f8;
          margin-bottom: 12px;
        }
        .s-car-box-bot {
          width: 270px;
          height: 50px;
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: #eceaef;
          padding-bottom: 5px;
        }
        .e-login-options li input:focus {
          border-color: #ccc;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.08) inset;
        }
        .e-login-btn,
        .e-register-btn {
          display: block;
          width: 300px;
          margin: 0 auto;
          height: 34px;
          text-align: center;
          font: 18px/34px SimHei;
          color: #fff;
        }
        .sf-lr-wrap {
          padding-top: 15px;
          border-top: 1px solid #f2f2f2;
        }
        .sf-lr-wrap h6 {
          margin-top: -26px;
        }
        .sf-lr-wrap a {
          margin: 0 10px;
          display: inline-block;
          width: 32px;
          height: 32px;
          vertical-align: middle;
          position: relative;
        }
        .sf-lr-wrap a:hover {
          text-decoration: none;
        }
        .r-fixed-wrap {
          position: fixed;
          right: -279px;
          bottom: 0;
          z-index: 9999;
          width: 270px;
          height: 100%;
          border-right: 5px solid #eee;
        }
        .r-fixed-ul li {
          position: relative;
          width: 45px;
          margin-bottom: 1px;
        }
        .r-fixed-ul li a {
          display: block;
          height: 45px;
          text-align: center;
          overflow: hidden;
          transition: 0.3s;
        }
        .r-fixed-ul li a em {
          display: inline-block;
          width: 32px;
          height: 32px;
          margin-top: 8px;
          vertical-align: middle;
        }
        .r-fixed-ul li a span {
          display: none;
          width: 32px;
          line-height: 22px;
          font-size: 14px;
          color: #fff;
          margin: 0 auto;
        }
        .r-fixed-ul li a:hover,
        .r-fixed-ul li a:hover span {
          display: block;
          text-decoration: none;
        }
        .r-fixed-ul li a:hover em {
          display: none;
        }
        .r-fixed-ul li a:hover em.r-f-icon-4 {
          display: inline-block;
        }
        .vBtnCurr {
          opacity: 0.86;
        }
        .onScroll,
        .onScroll body {
          overflow: hidden;
        }
        .cou-arrow-down,
        .cou-arrow-up {
          width: 10px;
          height: 6px;
          display: inline-block;
          vertical-align: middle;
          margin-left: 8px;
        }
        .cou-arrow-down {
          background-position: -141px -181px;
        }
        .cou-arrow-up {
          background-position: -141px -199px;
        }
        .p-cou-card-pad {
          padding: 0 15px 0 20px;
        }
        .c-card-more {
          width: 288px;
          background-color: #fff;
          text-align: left;
          border: 1px solid #ddd;
          position: relative;
        }
        .yk-DT-arrow {
          position: absolute;
          cursor: default;
          width: 12px;
          left: 45px;
          top: -7px;
        }
        .yk-DT-arrow * {
          cursor: default;
          display: block;
          color: #ddd;
          font-size: 12px;
          font-family: "SimSun";
          height: 18px;
          line-height: 1.231;
          overflow: hidden;
          font-style: normal;
          font-weight: normal;
        }
        .yk-DT-arrowem {
          color: #ddd;
        }
        .yk-DT-arrow span {
          color: #fff;
          margin-top: -16px;
        }
        .c-csrd-m-wrap {
          position: absolute;
          left: 0;
          top: 42px;
          z-index: 93;
        }
        .c-c-more-cleft {
          float: left;
          width: 22%;
        }
        .c-c-more-cright {
          float: left;
          width: 78%;
        }
        .c-card-more ul {
          padding: 5px;
          line-height: 20px;
        }
        .m-card-table {
          display: none;
        }
        .u-order-list {
          border-right: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
        .c-cou-item {
          margin: 0 0 10px 10px;
          padding: 0 20px 10px 0;
        }
        .c-cou-item .wid85 {
          width: 85%;
        }
        .u-o-left {
          width: 74% !important;
        }
        #footer {
          background-color: #323232;
          border-top-width: 5px;
          border-top-style: solid;
          color: #999;
          width: 100%;
          overflow: hidden;
          padding-top: 30px;
        }
        .flink-list li {
          float: left;
          margin: 15px 30px 0 0;
        }
        .flink-list li a {
          color: #666;
          font-size: 12px;
        }
        .b-f-link a:hover,
        .flink-list li a:hover {
          color: #888;
          text-decoration: none;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .b-foot {
          border-top: 1px solid #393939;
          padding: 20px 0 40px 0;
          margin-top: 30px;
        }
        .b-f-link {
          color: #444;
          line-height: 12px;
          margin-left: -10px;
          line-height: 20px;
        }
        .b-f-link a,
        .b-f-link span {
          color: #666;
          display: block;
          margin: 0 10px 5px;
          display: inline-block;
          vertical-align: middle;
        }
        .gf-tx {
          display: inline-block;
          margin: 0 10px;
          position: relative;
        }
        .gf-tx-ewm {
          position: absolute;
          left: 50%;
          top: 0;
          margin-left: -80px;
          opacity: 0;
          -moz-opacity: 0;
          filter: alpha(opacity=0);
          z-index: 3;
          transition: 0.3s;
        }
        .gf-tx-ewm img {
          display: block;
          width: 160px;
          height: 160px;
        }
        .gf-tx:hover .gf-tx-ewm {
          opacity: 1;
          -moz-opacity: 1;
          filter: alpha(opacity=100);
          top: -160px;
        }
        .share-fir-icon,
        .share-sec-icon,
        .share-thr-icon {
          width: 70px;
          height: 70px;
          display: inline-block;
          vertical-align: middle;
        }
        .share-list li,
        .share-list li a {
          float: left;
        }
        .pt3 {
          padding-top: 3px;
        }
        .dz-num {
          position: absolute;
          left: 50%;
          bottom: -24px;
          margin-left: 10px;
        }
        .share-list {
          padding: 0 auto;
          margin-left: -33px;
        }
        .share-list li {
          margin-left: 66px;
        }
        .share-fir-icon {
          background: url(../img/zan-icon.png) no-repeat 0 0/100% auto;
          transition: all 0.3s ease 0s;
        }
        .share-sec-icon {
          background: url(../img/wx-icon.png) no-repeat 0 0/100% auto;
          transition: all 0.3s ease 0s;
        }
        .share-thr-icon {
          background: url(../img/wb-icon.png) no-repeat 0 0/100% auto;
          transition: all 0.3s ease 0s;
        }
        #sharebutton .bdsharebuttonbox a {
          margin-left: 60px !important;
        }
        #sharebutton .bdsharebuttonbox a.zan-icon {
          width: 70px;
          height: 70px;
          background: transparent url(../img/zan-icon.png) no-repeat scroll 0 0/100%
            auto !important;
        }
        #sharebutton .bdsharebuttonbox a.zan-icon {
          width: 70px;
          height: 70px;
          background: transparent url(../img/zan-icon.png) no-repeat scroll 0 0/100%
            auto !important;
        }
        #sharebutton .bdsharebuttonbox a.zan-icon {
          width: 70px;
          height: 70px;
          background: transparent url(../img/zan-icon.png) no-repeat scroll 0 0/100%
            auto !important;
        }
        #sharebutton .bdsharebuttonbox a.zan-icon {
          width: 70px;
          height: 70px;
          background: transparent url(../img/zan-icon.png) no-repeat scroll 0 0/100%
            auto !important;
        }
        #sharebutton .bdsharebuttonbox a.bds_weixin {
          width: 70px;
          height: 70px;
          background: transparent url(../img/wx2-icon.png) no-repeat scroll 0 0/100%
            auto !important;
        }
        #sharebutton .bdsharebuttonbox a.zan-icon {
          width: 70px;
          height: 70px;
          background: transparent url(../img/zan-icon.png) no-repeat scroll 0 0/100%
            auto !important;
        }
        #sharebutton .bdsharebuttonbox a.zan-icon {
          width: 70px;
          height: 70px;
          background: transparent url(../img/zan-icon.png) no-repeat scroll 0 0/100%
            auto !important;
        }
        #sharebutton .bdsharebuttonbox a.bds_tsina {
          width: 70px;
          height: 70px;
          background: transparent url(../img/wb2-icon.png) no-repeat scroll 0 0/100%
            auto !important;
        }
        @media (min-width: 1300px) {
          .container {
            width: 1160px;
          }
          .i-slide,
          .swiper-container {
            height: 480px;
          }
          .col-7 {
            width: 75%;
          }
          .col-3 {
            width: 25%;
          }
          .c-v-pic-wrap {
            width: 640px;
            height: 357px;
          }
          .thr-attr-box {
            width: 120px;
            height: 357px;
          }
          .c-attr-wrap {
            width: 400px;
            height: 357px;
          }
          .u-course-list .comm-course-list li {
            width: 33.33%;
          }
        }
        @media (min-width: 1200px) and (max-width: 1299px) {
          .container {
            width: 1120px;
          }
          .c-v-pic-wrap {
            width: 620px;
            height: 346px;
          }
          .u-order-list .u-o-right {
            width: 25% !important;
          }
          .thr-attr-box {
            width: 120px;
            height: 346px;
          }
          .c-attr-wrap {
            width: 380px;
            height: 346px;
          }
          .u-course-list .comm-course-list li {
            width: 33.33%;
          }
          #cou-shopcar {
            width: 120px;
            height: 28px;
            font-size: 14px;
            line-height: 28px;
          }
        }
        @media (min-width: 992px) and (max-width: 1199px) {
          .container {
            width: 970px;
          }
          .nav li a {
            margin: 0 12px;
          }
          .order-step {
            background-size: 100%;
            height: 111px;
          }
          .u-order-list .u-o-right {
            width: 25% !important;
          }
          .order-step-bg-2 {
            background-position: 0 -141px;
          }
          .h-r-search {
            display: none;
          }
          .i-slide {
            height: auto;
          }
          .c-v-pic-wrap {
            width: 470px;
            height: 262px;
          }
          .thr-attr-box {
            width: 120px;
            height: 262px;
          }
          .c-attr-wrap {
            width: 380px;
            height: 262px;
          }
          .u-course-list .comm-course-list li {
            width: 33.33%;
          }
          #cou-shopcar {
            width: 120px;
            height: 28px;
            font-size: 14px;
            line-height: 28px;
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .container {
            width: 750px;
          }
          #logo {
            float: none;
          }
          .h-r-search {
            display: none;
          }
          .order-step {
            background-size: 100%;
            height: 97px;
          }
          .u-order-list .u-o-right {
            width: 20% !important;
          }
          .c-cou-item .wid85 {
            width: 84%;
          }
          .order-step-bg-2 {
            background-position: 0 -101px;
          }
          .comm-course-list li {
            width: 50%;
          }
          .c-v-pic-wrap {
            width: 370px;
            height: 206px;
          }
          .thr-attr-box {
            float: none;
            width: 750px;
            height: 80px;
          }
          .c-attr-wrap {
            width: 380px;
            height: 206px;
          }
          .c-infor-box .col-3,
          .c-infor-box .col-7 {
            width: 100%;
          }
          .c-infor-box .col-7 {
            margin: 0 0 20px 0;
          }
          .c-infor-box .col-7 .mr30 {
            margin: 0;
          }
          #cou-shopcar {
            width: 120px;
            height: 28px;
            font-size: 14px;
            line-height: 28px;
          }
        }
        .i-slide {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .swiper-container {
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -ms-backface-visibility: hidden;
          -o-backface-visibility: hidden;
          backface-visibility: hidden;
          z-index: 1;
        }

        .swiper-wrapper {
          position: relative;
          width: 100%;
          -webkit-transition-property: -webkit-transform, left, top;
          -webkit-transition-duration: 0s;
          -webkit-transform: translate3d(0, 0, 0);
          -webkit-transition-timing-function: ease;
          -moz-transition-property: -moz-transform, left, top;
          -moz-transition-duration: 0s;
          -moz-transform: translate3d(0, 0, 0);
          -moz-transition-timing-function: ease;
          -o-transition-property: -o-transform, left, top;
          -o-transition-duration: 0s;
          -o-transform: translate3d(0, 0, 0);
          -o-transition-timing-function: ease;
          -o-transform: translate(0, 0);
          -ms-transition-property: -ms-transform, left, top;
          -ms-transition-duration: 0s;
          -ms-transform: translate3d(0, 0, 0);
          -ms-transition-timing-function: ease;
          transition-property: transform, left, top;
          transition-duration: 0s;
          transform: translate3d(0, 0, 0);
          transition-timing-function: ease;
          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
        }
        .swiper-free-mode > .swiper-wrapper {
          -webkit-transition-timing-function: ease-out;
          -moz-transition-timing-function: ease-out;
          -ms-transition-timing-function: ease-out;
          -o-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
          margin: 0 auto;
        }
        .swiper-slide {
          float: left;
          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
        }
        .swiper-slide img {
          display: block;
          margin: 0 auto;
          max-width: 100%;
          height: auto;
        }
        .swiper-wp8-horizontal {
          -ms-touch-action: pan-y;
        }
        .swiper-wp8-vertical {
          -ms-touch-action: pan-x;
        }
        .i-slide .pagination {
          position: absolute;
          left: 0;
          text-align: center;
          bottom: 10px;
          width: 100%;
          z-index: 9;
        }
        .swiper-pagination-switch {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 10px;
          border: 1px solid #fff;
          margin: 0 3px;
          cursor: pointer;
        }
        .swiper-active-switch {
          background: #fff;
        }
        .i-slide .s-arrow {
          position: absolute;
          top: 50%;
          margin-top: -35px;
          display: block;
          width: 40px;
          height: 70px;
          opacity: 0.6;
          -moz-opacity: 0.6;
          filter: alpha(opacity=60);
          z-index: 9;
        }
        .i-slide .arrow-left {
          background: url(../img/s-prev-btn.png) no-repeat 0 0;
          left: 0;
        }
        .i-slide .arrow-right {
          background: url(../img/s-next-btn.png) no-repeat 0 0;
          right: 0;
        }
        .i-slide .s-arrow:hover {
          opacity: 1;
          -moz-opacity: 1;
          filter: alpha(opacity=100);
          text-decoration: none;
        }
        .c-tab-title {
          border-bottom: 1px solid #e2e2e2;
          height: 34px;
          text-align: center;
          margin-bottom: 50px;
        }
        .c-tab-title a {
          border-bottom: 1px solid transparent;
          display: inline-block;
          line-height: 34px;
          margin: 0 20px;
          padding: 0 10px;
          font-size: 16px;
          color: #666;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .c-tab-title a:hover {
          text-decoration: none;
        }
        .i-question-list {
          border-top: 1px solid #e2e2e2;
          padding: 30px 0 40px;
          margin-top: -10px;
        }
        .i-question-list ul {
          display: block;
          height: 370px;
          overflow: hidden;
          position: relative;
        }
        .i-question-list ul li {
          border-bottom: 1px dotted #e6e6e6;
          height: 90px;
          overflow: hidden;
        }
        .i-q-l-wrap {
          padding: 10px 0 15px 75px;
          position: relative;
          min-height: 67px;
        }
        .u-face {
          position: absolute;
          left: 0;
          top: 10px;
        }
        .u-face img {
          display: block;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .i-q-txt {
          height: 20px;
          line-height: 200%;
          overflow: hidden;
        }
        .stud-act-list > section {
          border-top: 1px solid #e2e2e2;
          margin-top: -10px;
          padding-top: 20px;
        }
        .stud-act-list ul {
          height: 358px;
          overflow: hidden;
        }
        .stud-act-list li {
          border-bottom: 1px solid #f2f2f2;
          padding: 17px 0 12px 75px;
          position: relative;
          height: 60px;
        }
        .i-teacher-list ul {
          margin-left: -30px;
          padding-top: 20px;
        }
        .i-teacher-list ul li {
          width: 25%;
          float: left;
        }
        .i-teach-wrap {
          background: #fff;
          border: 1px solid transparent;
          display: block;
          margin: 0 0 50px 30px;
          overflow: hidden;
          text-align: center;
          padding: 15px 15px 20px;
          overflow: hidden;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .i-teach-pic {
          width: 60%;
          margin: 10px auto 0;
        }
        .i-teach-pic img {
          display: block;
          border-radius: 50%;
          max-width: 100%;
          transition: 0.5s;
          -webkit-transition: 0.5s;
        }
        .i-teach-wrap .i-q-txt {
          border-top: 1px dotted #e2e2e2;
          padding-top: 15px;
        }
        .i-teach-wrap:hover {
          border-color: #e8e8e8;
          box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.06);
        }
        .i-teach-wrap:hover .i-teach-pic img {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }
        .c-sort-box {
          border-top: 1px solid #e2e2e2;
          margin-top: -15px;
        }
        .c-s-dl dl {
          border-bottom: 1px dotted #ddd;
          line-height: 30px;
        }
        .c-s-dl dl dt {
          float: left;
          width: 75px;
          text-align: right;
          padding-right: 15px;
        }
        .c-s-dl dl {
          position: relative;
          padding: 15px 60px 0 0;
        }
        .c-s-dl-li {
          padding-left: 90px;
        }
        .c-s-dl-li ul {
          overflow: hidden;
        }
        .c-s-dl-li ul li {
          float: left;
          margin: 0 15px 9px 0;
        }
        .c-s-dl-li ul li a {
          display: inline-block;
          color: #666;
          font-size: 14px;
          padding: 0 10px;
        }
        .c-s-dl dl ul li a:hover,
        .c-s-dl-li ul li.current a {
          color: #ea562e;
          text-decoration: none;
        }
        .c-s-more {
          position: absolute;
          right: 5px;
          top: 16px;
        }
        .js-wrap {
          background: #f4f4f4;
          height: 40px;
          line-height: 40px;
          padding: 0 15px;
          position: relative;
          overflow: hidden;
          clear: both;
        }
        .js-tap li {
          float: left;
        }
        .js-tap li a {
          display: block;
          padding: 0 30px;
          line-height: 40px;
          color: #666;
          font-size: 14px;
        }
        .js-tap li.current a {
          color: #fff;
        }
        .c-v-pic-wrap {
          float: left;
          transition: 0.3s;
          position: relative;
        }
        .c-v-pic {
          display: block;
          max-width: 100%;
        }
        .thr-attr-box {
          background: #985054;
          float: right;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .c-attr-wrap {
          background: #264863;
          float: right;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .lt-ie9.c-v-pic-wrap,
        .lt-ie9.lt-ie8 .c-v-pic-wrap {
          width: 640px;
          height: 357px;
        }
        .lt-ie9 .thr-attr-box,
        .lt-ie9.lt-ie8 .thr-attr-box {
          width: 140px;
          height: 357px;
        }
        .lt-ie9 .c-attr-wrap,
        .lt-ie9.lt-ie8 .c-attr-wrap {
          width: 420px;
          height: 357px;
        }
        .thr-attr-ol {
          padding: 0 10px;
          overflow: hidden;
          height: 100%;
        }
        .thr-attr-ol li {
          border-bottom: 1px solid #ad7376;
          height: 33.33%;
          width: 100%;
          text-align: center;
          display: block;
        }
        .thr-attr-ol li aside {
          display: inline-block;
          vertical-align: middle;
        }
        .thr-attr-ol li span {
          font-size: 14px;
          vertical-align: middle;
        }
        .thr-attr-ol li h6 {
          display: inline-block;
          font-size: 20px;
          vertical-align: middle;
        }
        .thr-attr-ol p {
          display: inline-block;
          vertical-align: middle;
          height: 100%;
          width: 1px;
          font-size: 0;
          line-height: 100%;
        }
        .c-attr-jg {
          border-bottom: 1px solid #30536f;
          margin-top: 30px;
          padding-bottom: 20px;
          vertical-align: middle;
        }
        .c-attr-jg span {
          font-size: 14px;
          vertical-align: middle;
        }
        .c-attr-jg big {
          font-size: 28px;
          vertical-align: middle;
        }
        .c-attr-jg span s {
          text-decoration: line-through;
          vertical-align: middle;
        }
        .c-attr-mt {
          margin-top: 30px;
        }
        .kcShare {
          overflow: hidden;
          width: 48px;
        }
        .kcShare #bdshare {
          color: #fff;
          height: 24px;
          left: 50px;
          margin: 0;
          position: absolute;
          top: -4px;
          width: 160px;
        }
        .sc-end a,
        .sc-end a:hover {
          color: #f4c600;
          cursor: default;
          text-decoration: none;
        }
        .c-infor-tabTitle.c-tab-title {
          margin: 20px 0;
          text-align: left;
        }
        .c-infor-tabTitle.c-tab-title a {
          font-size: 18px;
          margin-left: 0;
        }
        .course-txt-body {
          overflow: hidden;
          color: #888;
          font-size: 14px;
          line-height: 30px;
          white-space: normal;
          word-break: break-all;
          margin-top: 20px;
          padding: 0 10px;
          text-align: justify;
        }
        .course-txt-body img {
          max-width: 100%;
        }
        .ctb-btn {
          text-align: center;
          margin-top: 15px;
        }
        .ctb-btn a {
          opacity: 0.6;
          -moz-opacity: 0.6;
          filter: alpha(opacity=60);
        }
        .c-teacher-txt-show {
          color: #999;
          line-height: 30px;
          white-space: normal;
          word-break: break-all;
          margin: 10px 10px 0;
        }
        .buy-cin-list {
          margin-left: -18px;
          overflow: hidden;
          clear: both;
        }
        .buy-cin-list span {
          display: block;
          float: left;
          width: 18%;
          margin: 5px 0 15px 18px;
          text-align: center;
        }
        .buy-cin-list span img {
          border-radius: 50%;
          display: block;
          max-width: 100%;
        }
        .buy-cin-list span tt {
          height: 18px;
          width: 100%;
          display: block;
          margin-top: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .comm-title.all-article-title,
        .comm-title.all-teacher-title {
          overflow: visible;
        }
        .all-teacher-title .c-tab-title {
          margin-bottom: 20px;
          height: auto;
        }
        .all-teacher-title .c-tab-title a {
          margin: 0 10px;
        }
        .t-infor-wrap {
          border-bottom: none;
          border-top: 1px solid #e2e2e2;
          padding-top: 10px;
          margin-top: -10px;
        }
        #t-infor-menu {
          border: none;
          height: auto;
        }
        #t-infor-menu {
          text-align: left;
        }
        #t-infor-menu p a {
          margin: 20px 0 0 0;
          padding: 0 0 0 10px;
          height: 18px;
          line-height: 18px;
          border: solid #666;
          border-width: 0 0 0 5px;
          display: inline-block;
        }
        .t-infor-menu {
          width: 10%;
        }
        .t-infor-box {
          width: 90%;
        }
        .t-infor-pic {
          float: left;
          margin: 0 30px 0 0;
          background: #fff;
          border: 1px solid #f0f0f0;
          box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }
        .t-infor-pic img {
          margin: 20px auto;
          width: 90%;
          display: block;
        }
        .t-tag-bg {
          background: #f2f2f2;
          display: inline-block;
          padding: 10px 15px;
          overflow: hidden;
          font-size: 14px;
          color: #888;
        }
        .t-infor-txt {
          margin: 20px 10px 0;
          line-height: 200%;
          font-size: 14px;
          color: #777;
        }
        .t-infor-txt p {
          text-indent: 24px;
          text-align: justify;
        }
        .comm-title.all-article-title {
          margin-bottom: 20px;
        }
        .comm-title.all-article-title .c-tab-title {
          padding-top: 10px;
        }
        .comm-title.all-article-title h2 span {
          font-size: 24px;
        }
        .i-article-list li {
          border-bottom: 1px dotted #ddd;
          margin-bottom: 20px;
          padding: 0 0 20px 210px;
          position: relative;
          min-height: 100px;
        }
        .i-article-pic {
          position: absolute;
          left: 0;
          top: 0;
          width: 180px;
          text-align: center;
          transition: 0.3s;
          -webkit-transition: 0.3s;
        }
        .i-article-pic img {
          max-width: 100%;
        }
        .i-art-title {
          color: #333;
          font-size: 20px;
        }
        .i-art-title:hover {
          text-decoration: none;
        }
        .i-article-list.r-art-wrap li {
          padding: 0 0 10px 30px;
          min-height: inherit;
          position: relative;
        }
        .r-art-wrap li .orderNum {
          position: absolute;
          left: 0;
          top: 6px;
        }
        .r-art-wrap li .orderNum span {
          background: #ddd;
          border-radius: 3px;
          color: #777;
          display: inline-block;
          font-size: 12px;
          text-align: center;
          width: 20px;
          height: 20px;
          line-height: 20px;
        }
        .r-art-wrap li.lt2 .orderNum span {
          background: #ca9191;
          color: #fff;
        }
        #art-infor-body {
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          line-height: 200%;
          color: #4e4e4e;
          font-size: 14px;
          font-family: SimSun;
          padding: 20px 10px;
          overflow: hidden;
        }
        #art-infor-body p {
          margin-bottom: 20px;
          text-indent: 24px;
          text-align: justify;
        }
        #art-infor-body img {
          max-width: 100%;
          margin: 0 auto;
        }
        .i-q-txt {
          height: 40px;
          overflow: hidden;
        }
        .i-q-txt p {
          line-height: 20px;
          height: 20px;
        }
        .q-tip-pic {
          margin-right: 20px;
          float: left;
        }
        .q-c-list dl {
          margin-bottom: 30px;
          min-height: 30px;
          clear: both;
          position: relative;
          padding-left: 70px;
        }
        .q-c-list dl dt {
          position: absolute;
          top: 5px;
          left: 0;
          width: 60px;
          text-align: right;
        }
        .q-c-list dl dd label input,
        .q-c-list dl dd textarea,
        .tags-content {
          background: #fff;
          border: 1px solid #73868e;
          color: #333;
          font-size: 15px;
          width: 92%;
          padding: 0 10px;
          line-height: 34px;
          height: 34px;
        }
        .q-sort-wrap span {
          background: #fff;
          border: 1px solid #bbb;
          cursor: pointer;
          display: inline-block;
          padding: 0 20px;
          height: 32px;
          line-height: 32px;
          font-size: 16px;
          color: #666;
          margin-right: 10px;
        }
        .q-sort-wrap span.current {
          background: #fbfbfb;
          cursor: default;
        }
        .tags-content {
          height: 20px;
          line-height: 20px;
          padding: 7px 10px;
        }
        .q-c-list dl dd label input:focus,
        .q-c-list dl dd textarea:focus,
        .tags-content:focus {
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.08) inset;
        }
        .q-c-list dl dd textarea {
          height: 150px;
          font-size: 14px;
          line-height: 30px;
        }
        .v-code-pic {
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          width: 88px;
        }
        .tags-content span {
          color: #919191;
          cursor: default;
        }
        .q-c-jy {
          position: absolute;
          right: 5px;
          bottom: 0;
        }
        .tags-content .list-tag {
          margin-right: 1px;
        }
        .taglist {
          margin-top: -10px;
        }
        .taglist .list-tag {
          color: #787d82;
          cursor: pointer;
          margin: 1px;
        }
        .list-tag {
          background: #f2efed;
          color: #787d82;
          float: left;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          padding: 0 10px;
          transition: all 0.25s ease 0s;
          white-space: nowrap;
          word-wrap: break-word;
        }
        .list-tag.onactive,
        .list-tag:hover {
          background: #eae7e4;
          color: #4e4e4e;
          text-decoration: none;
        }
        .list-tag.onactive {
          cursor: default;
        }
        .q-all-list li {
          border-bottom: 1px solid #e2e2e2;
          margin-top: 30px;
          position: relative;
          padding-bottom: 30px;
        }
        .q-head-pic {
          position: absolute;
          left: 0;
          top: 0;
          width: 100px;
          text-align: center;
        }
        .q-head-pic img {
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .q-txt-box {
          position: relative;
          margin-left: 120px;
          padding-right: 130px;
          min-height: 80px;
        }
        .replyBrowseNum {
          display: block;
          position: absolute;
          right: 0;
          top: 10px;
          width: 120px;
          overflow: hidden;
          clear: both;
        }
        .replyBrowseNum:hover,
        .replyBrowseNum:hover * {
          cursor: pointer;
          text-decoration: none;
          opacity: 0.9;
          filter: alpha(opacity=90);
        }
        .browseNum,
        .replyNum {
          float: left;
          width: 50px;
          margin: 0 5px;
          text-align: center;
        }
        .r-b-num {
          font-size: 14px;
          font-family: "Microsoft YaHei";
          color: #666;
        }
        .q-r-rank-list li {
          border-bottom: 1px dotted #e2e2e2;
          margin-top: 15px;
          padding: 0 80px 15px 0;
          position: relative;
        }
        .q-r-r-num {
          position: absolute;
          right: 0;
          top: 0;
        }
        .q-r-r-num .r-b-num {
          color: #ff5f16;
        }
        .q-infor-box {
          border-top: 1px solid #e2e2e2;
          padding-top: 20px;
        }
        .q-infor-box .q-txt-box {
          margin-left: 60px;
          min-height: inherit;
        }
        .q-infor-box .q-head-pic {
          width: 50px;
        }
        .q-infor-box .i-q-txt {
          height: auto;
        }
        .q-share {
          position: absolute;
          right: 0;
          top: 6px;
          width: 120px;
        }
        .q-i-noter-box {
          border-top: 1px solid #ddd;
          margin-top: 25px;
          padding-top: 25px;
        }
        .q-n-r-box .n-reply {
          border-top: 1px solid #e2e2e2;
          display: block;
          padding-left: 36px;
          margin-top: 20px;
        }
        .q-n-r-box .question-list.lh-bj-list li {
          padding-bottom: 30px;
        }
        .question-list.lh-bj-list .c-btn-6 {
          display: none;
        }
        .question-list.lh-bj-list li:hover .c-btn-6 {
          display: block;
        }
        .question-list.lh-bj-list .bg-fa .c-btn-6,
        .question-list.lh-bj-list li:hover .bg-fa .c-btn-6 {
          display: inline-block;
        }
        .good-anwer-box {
          background: #fffaed;
          margin-top: 20px;
          padding: 0 20px 20px;
          position: relative;
        }
        .g-a-title span {
          border-radius: 0 0 30px 0;
          display: inline-block;
          padding: 0 40px 0 20px;
          font-size: 18px;
          color: #fff;
          height: 34px;
          line-height: 34px;
          margin-left: -20px;
        }
        .good-answer .question-list.lh-bj-list li {
          border: none;
        }
        .good-answer .n-reply {
          border-top: 1px solid #e2e2e2;
        }
        .u-order-wrap dl {
          margin-bottom: 25px;
        }
        .u-order-wrap dl dt {
          background: #f4f4f4;
          border: solid #e9e9e9;
          border-width: 1px 0;
          height: 32px;
          line-height: 32px;
          overflow: hidden;
          padding: 0 10px;
        }
        .u-ol-pic {
          width: 120px;
          float: left;
          display: block;
          margin-right: 15px;
        }
        .u-ol-pic img {
          display: block;
          max-width: 100%;
        }
        .u-account-box {
          padding: 30px 0 0 60px;
        }
        .u-account-li li {
          margin-bottom: 30px;
          overflow: hidden;
        }
        .u-account-li li * {
          vertical-align: middle;
        }
        .u-a-title {
          display: inline-block;
          width: 80px;
          text-align: right;
          padding-right: 10px;
        }
        .u-a-inpt,
        .u-account-li select {
          background: #fff;
          border: 1px solid #ddd;
          height: 32px;
          line-height: 36px;
          width: 300px;
          font-size: 14px;
          color: #666;
          padding: 0 10px;
        }
        .u-a-inpt:focus,
        .u-account-li select:focus {
          border-color: #ccc;
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1) inset;
        }
        .u-a-error {
          margin-left: 10px;
          color: #ff8723;
        }
        .u-sys-news dl {
          border-bottom: 1px dotted #ddd;
          padding-bottom: 20px;
          margin-top: 20px;
          overflow: hidden;
          clear: both;
        }
        .u-sys-news dl dt {
          border-right: 3px solid #f2f2f2;
          float: left;
          width: 100px;
          margin-right: 20px;
          padding-right: 20px;
          height: 100px;
        }
        .p-h-header {
          background: #111;
          width: 100%;
        }
        .p-h-head {
          padding: 0 80px;
          height: 60px;
          position: relative;
        }
        .p-h-title {
          font-size: 20px;
          line-height: 60px;
          text-align: center;
          height: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .p-h-goback {
          position: absolute;
          left: 15px;
          top: 20px;
        }
        .p-h-rSc {
          position: absolute;
          left: 95px;
          top: 22px;
        }
        .dpOpen a {
          color: #f4c600;
        }
        .dpBtn.dpOpen {
          width: 50px;
          position: absolute;
          top: 1px;
          right: 0;
          z-index: 999999;
        }
        .p-h-s-bar .lev-num-bar,
        .p-h-s-bar .time-bar-wrap,
        .p-h-s-bar .time-bar-wrap .lev-num-wrap {
          border-radius: 0;
        }
        .p-h-s-bar .time-bar-wrap .lev-num-wrap {
          background: #666;
        }
        .p-h-s-bar .lev-num-bar {
          background: #985054;
        }
        .time-bar-wrap .lev-num-bar p {
          position: relative;
          height: 12px;
          overflow: hidden;
        }
        .time-bar-wrap .lev-num-bar p .lev-num {
          right: 15px;
          top: 0;
          left: inherit;
        }
        .p-h-box {
          padding: 0 400px 0 0;
          position: relative;
        }
        .p-h-video {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 99999;
        }
        .p-h-video-box {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          height: 100%;
          width: 100%;
          z-index: 2;
        }
        .p-h-video-tip {
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -30px 0 0 -25px;
          z-index: 1;
        }
        .p-h-r-ele {
          background: #fff;
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 100%;
          z-index: 99999;
        }
        .p-h-r-wrap {
          padding: 0 10px;
        }
        .p-h-r-title {
          border-bottom: 1px solid #364b61;
          height: 34px;
        }
        .p-h-r-title li {
          float: left;
          width: 50%;
        }
        .p-h-r-title li a {
          color: #364b61;
          display: block;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 16px;
        }
        .p-h-r-title li.current a {
          background: #264863;
          border-radius: 3px 3px 0 0;
          color: #fff;
        }
        .p-h-r-title li a:hover {
          text-decoration: none;
        }
        #p-h-r-cont {
          position: relative;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .p-h-r-menu .lh-menu {
          margin: 0;
        }
        .p-h-m-tp {
          background: #111;
          height: 60px;
          margin: 0 -10px;
          position: relative;
        }
        .o-c-btn {
          width: 15px;
          position: absolute;
          left: 0;
          top: 0;
          height: 60px;
          line-height: 160%;
        }
        .o-c-btn a {
          border-left: 1px solid #666;
          height: 40px;
          display: block;
          padding-top: 20px;
        }
        .o-c-btn.open-o-c a,
        .open-o-c.o-c-btn a:hover {
          border-color: #f4c600;
        }
        .o-c-btn a:hover {
          border-color: #fff;
        }
        .pay-o-e-wrap .comm-shadow-2 {
          box-shadow: 0 1px 0 0 #fff, 0 2px 0 0 #ccc, 0 3px 0 0 #fff,
            0 4px 0 0 #ccc, 0 5px 0 0 #fff, 0 3px 5px 2px rgba(0, 0, 0, 0.1);
        }
        .order-table {
          border: 1px solid #ddd;
        }
        .orderSuccess ol {
          overflow: hidden;
          padding: 20px 30px 40px 200px;
        }
        .order-table ol h2 {
          border-bottom: 1px solid #ddd;
          height: auto;
          font-size: 24px;
        }
        .paySuccIcon {
          height: 140px;
          left: 3em;
          top: 0;
          width: 140px;
        }
        .kj-link li a svg,
        .paySuccIcon svg {
          width: 100%;
          height: 100%;
        }
        .kj-link {
          padding-left: 200px;
          height: 130px;
        }
        .kj-link li {
          display: inline-block;
          margin: 0 20px;
        }
        .kj-link li a {
          display: inline-block;
          height: 110px;
          width: 110px;
          text-align: center;
          font-size: 18px;
          color: #eb4f38;
        }
        .kj-link li a:hover {
          opacity: 0.9;
          filter: alpha(opacity=90);
          text-decoration: none;
        }
        .ei-item-box a {
          display: block;
          height: 50px;
          width: 55px;
          z-index: 99999;
          color: #fff;
          position: absolute;
          top: -8px;
          right: 0;
          transition: 0.5s;
          -webkit-transition: 0.5s;
          -ms-transition: 0.5s;
          -o-transition: 0.5s;
        }
        .ei-item-box a img {
          width: 55px;
          height: 50px;
        }
        .ei-item-box a:hover {
          top: 0;
          -webkit-transition: top 500ms;
          -moz-transition: top 500ms;
          -ms-transition: top 500ms;
          -o-transition: top 500ms;
          transition: top 500ms;
        }
        .ei-i-dialog {
          background: url(../img/black-bg-hf.png) repeat top left;
          width: 100%;
          transition: 0.3s;
          -webkit-transition: 0.3s;
          -o-transition: 0.3s;
          -moz-transition: 0.3s;
          -ms-transition: 0.3s;
        }
        .ei-i-dialog-box-tit {
          border-bottom: 1px solid #333;
          height: 32px;
          background: url(../img/black-bg-hf.png) repeat top left;
        }
        .ei-i-dialog-box-tit span {
          font: 14px/32px "Microsoft YaHei";
          color: #fff;
        }
        .ei-i-close {
          background-color: #111;
          color: #f0742e;
          font: 14px/29px "Microsoft YaHei";
          right: 0;
          text-align: center;
          top: 0;
          width: 80px;
        }
        .ei-i-close:hover {
          text-decoration: none;
        }
        .ei-i-dialog-box-boy .dialog-box-boy-in ul li {
          float: left;
          width: 33.33%;
        }
        .box-boy-in-i {
          display: block;
          overflow: hidden;
          position: relative;
          margin: 30px 0 50px;
        }
        .box-boy-in-i a {
          display: block;
          width: 93%;
          border: 3px solid transparent;
        }
        .box-boy-in-i a .pic {
          display: block;
          max-width: 100%;
          height: auto;
        }
        .dialog-box-boy-in ul li .xz {
          bottom: 0;
          display: none;
          height: 40px;
          position: absolute;
          right: 0;
          width: 40px;
        }
        .dialog-box-boy-in ul li a .name {
          display: block;
          width: 100%;
          height: 32px;
          background: url(../img/black-name.png) repeat top left;
          font: 14px/32px "Microsoft YaHei";
          color: #fff;
          text-align: center;
          bottom: 0;
          left: 0;
        }
        .dialog-box-boy-in ul li:hover .box-boy-in-i a,
        .ei-i-dialog-box-boy .dialog-box-boy-in ul li .current a {
          border-color: #ef550f;
        }
        .dialog-box-boy-in ul li:hover .box-boy-in-i .xz,
        .ei-i-dialog-box-boy .dialog-box-boy-in ul li .current .xz {
          display: block;
        }
        #triangle-bottomright {
          border-bottom: 50px solid #ef550f;
          border-left: 50px solid transparent;
          height: 0;
          right: 0;
          bottom: 0;
          width: 0;
        }
        .loging {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 200px;
        }
        .loging img {
          width: 62px;
          height: 62px;
          margin-top: 72px;
        }
        @media (min-width: 992px) and (max-width: 1199px) {
          .c-attr-jg,
          .c-attr-mt {
            margin-top: 15px;
          }
          .c-attr-time {
            display: none;
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .i-teacher-list ul li {
            width: 50%;
          }
          .thr-attr-ol li {
            float: left;
            width: 33.3%;
            height: 80px;
          }
          .c-attr-jg,
          .c-attr-mt {
            margin-top: 15px;
          }
          .c-attr-time,
          .c-attr-undis {
            display: none;
          }
          .buy-cin-list span {
            width: 10%;
          }
          .all-teacher-title h2 {
            float: none;
            margin-bottom: 15px;
          }
          .t-infor-menu {
            float: none;
            width: 100%;
          }
          .t-infor-menu .c-tab-title {
            margin-bottom: 10px;
          }
          .t-infor-box {
            width: 100%;
          }
          .t-infor-box .ml20 {
            margin-left: 10px;
          }
        }
        .m-play-nav {
          display: none !important;
        }
        .tip-new-warp {
          position: fixed;
          z-index: 9999;
          background: url("../img/kyb-tip-all-bg.png") repeat top left;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          text-align: center;
        }
        .tip-new-info {
          display: inline-block;
          border-radius: 10px;
          overflow: hidden;
          vertical-align: middle;
          z-index: 10000;
          margin: 150px auto;
          position: relative;
          width: 450px;
          height: 553px;
        }
        .tip-new-in-bg,
        .tip-new-in-bg img {
          display: block;
          width: 100%;
        }
        .tip-new-in-nr {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10001;
          width: 100%;
          height: auto;
        }
        .tip-new-in-nr-top {
          height: 230px;
          position: relative;
          width: 100%;
        }
        .new-tips-close {
          display: block;
          width: 38px;
          height: 38px;
          position: absolute;
          top: 5px;
          right: 5px;
        }
        .new-tips-close img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .tip-new-in-b-txt {
          border: 1px dashed #ff6f40;
          margin: 20px 50px 40px;
          padding: 20px;
          line-height: 30px;
          text-align: justify;
          text-indent: 34px;
        }
        .tip-new-in-b-txt p {
          text-align: right;
        }
        .tip-new-in-b-btn a {
          display: block;
          margin: 0 50px;
          background: #ff662f;
          color: #fff;
          height: 46px;
          line-height: 46px;
          font-size: 16px;
          text-align: center;
          border-radius: 6px;
        }
        .tip-new-in-b-btn a:hover {
          text-decoration: none;
          opacity: 0.9;
          filter: alpha(opacity=90);
        }
      `}</style>
    );
  }
}

export default PageStyle;
