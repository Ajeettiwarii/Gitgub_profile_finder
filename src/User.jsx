function User({user}){     
    console.log(user)
    const{avatar_url,followers,following,public_repos,name,login,created_at}=user 
    const createddate=new Date(created_at); 
    return (   
    <div className="user">
         <div>
               <img src={avatar_url} alt="user" className="avatar" />
         </div> 
         <div>
                  <a href={`https://github.com/${login}`} >{name || login}</a>
                  <p>User joined on {`${createddate.getDate()} ${createddate.toLocaleString('en-us',{
                    month:'short'
                  })} ${createddate.getFullYear()}`}</p>
         </div> 
         <div>
              <div>  
                <p>Public Repos</p> 
                <p>{public_repos}</p>

              </div> 
              <div>
                       <p>Followers</p>  
                       <p>{followers}</p>
              </div>  
              <div>  
                  <p>Following</p>
                  <p>{following}</p>

              </div>
         </div>
    </div>
    )

} 
export default User;