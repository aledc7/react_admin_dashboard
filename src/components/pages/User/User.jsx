import './user.css';
import { 
    CalendarToday, 
    LocationSearching, 
    MailOutline, 
    PermIdentity, 
    PhoneAndroid,
    CloudUpload,
} from '@mui/icons-material';

function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit USer</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://i.pravatar.cc/40" alt="" className="ShowUserImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Anna Becker</span>
                            <span className="userShowUserTitle">Systems Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon'/>
                            <span className="UserShowInfoTitle">anabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon'/>
                            <span className="UserShowInfoTitle">09/10/1979</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon'/>
                            <span className="UserShowInfoTitle">+54 3415498622</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon'/>
                            <span className="UserShowInfoTitle">aledc@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon'/>
                            <span className="UserShowInfoTitle">Colombres 942 | Rosario</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className='userUpdateInput' placeholder='annabeck99' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" className='userUpdateInput' placeholder='Anna Becker' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" className='userUpdateInput' placeholder='aledc@gmail.com' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" className='userUpdateInput' placeholder='+54 3415498622' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" className='userUpdateInput' placeholder='Colombres 942 | Rosario' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://i.pravatar.cc/100"  className='userUpdateImg' alt="" />
                                <label htmlFor="profilepic"><CloudUpload className='userUploadIcon' /></label>
                                <input type="file" name="" id="profilepic" className='uploadBtn' />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export { User };
