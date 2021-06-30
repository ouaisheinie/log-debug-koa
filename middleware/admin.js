module.exports = () => {
  return async(ctx, next) => {
    if(ctx.state.user.username === 'admin'){
      next()
    }else {
      ctx.body = {
        code: -1,
        message: '用户没权限，不是admin'
      }
    }
  }
}