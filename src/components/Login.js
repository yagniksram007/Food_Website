const Login=()=> {
    return(
        <>
    <div class="container" center>
        <div class="row" center>
            <div class="col-md-2"></div>
            <div class="col-md-8"></div>
            <div class="col-md-2"></div>
            <div class="card"  >
                
                <center>    
                <img src="https://1fid.com/wp-content/uploads/2022/07/boy-anime-wallpaper-image-for-profile-pic-5.jpg" class="img-thumbnail" alt="..." width="200px"/>
                </center>
                <div class="card-body" >
                 
        
                  <div class="mb-3">
                    <center><h5 class="card-title">Login Page</h5> </center>
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                  </div>
                  <label for="inputPassword5" class="form-label">Password</label>
                  <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"/>
                  <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8-20 characters long
                  </div>
                  <br/>
                  <a href="home.html" class="btn btn-primary">Submit</a>
                  <br/>
                </div>
              </div>
        </div>
    </div>
    

        </>
    )
}

export default Login;