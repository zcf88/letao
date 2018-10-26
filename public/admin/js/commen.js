$(function(){
$(document).ajaxStart(function(){
  NProgress.start();
})
$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },500)
})
$('.nav .categroy a').on('click',function(){
  $(this).next().slideToggle();
})

$('.icon_menu').on('click',function(){
  $('.lt_aside').toggleClass('active');
  $('body').toggleClass('active'); 
})
$('.icon_logout').on('click',function(){
  $('#logoutModal').modal('show');
})


//模态框的确认按钮注册点击事件
$('#logoutModal .confirm').on('click',function(){
  //退出后台管理系统，向ajax发送请求，同时页面跳转到登录页
  $.ajax({
    url:'/employee/employeeLogout',
    type:'get',
    success:function(info){
      if(info.success){
        location.href = 'login.html';
        
      }
      
    }
  })
  
})
})