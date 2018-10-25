$(function(){
//验证表单
$('form').bootstrapValidator({
  fields:{
    username:{
     validators:{
      notEmpty:{
        message:'用户名不能为空'
      },
      stringLength:{
        min:2,
        max:6,
        message:'用户名必须为2-6位'
      },
      callback:{
        message:'用户名不存在'
      }
     }
    },
    password:{
     validators:{
      notEmpty:{
        message:'密码不能为空'
      },
      stringLength:{
        min:6,
        max:12,
        message:'密码必须为6-12位'
      },
      callback:{
        message:'密码错误'
      }
     }
    }
  },
  feedbackIcons:{
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  }
})
//重置小图标
$('[type=reset]').on('click',function(){
  $('form')
  .data('bootstrapValidator')
  .resetForm(true);
})

$('form').on('success.form.bv',function(e){
  e.preventDefault();
  $.ajax({
    url:'/employee/employeeLogin',
    type:'post',
    data:$('form').serialize(),
    success:function(info){
    // console.log(info);
    if(info.success){
      location.href = 'index.html'
    }
    if(info.error === 1000){
      $('form').data('bootstrapValidator')
      .updateStatus('username','INVALID','callback');
    }
    if(info.error === 1001){
      $('form').data('bootstrapValidator')
      .updateStatus('password','INVALID','callback');
    }
    
    }
    
  })
})



})