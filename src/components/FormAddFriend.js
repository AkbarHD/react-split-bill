export default function FormAddFriend(){
    return(
        <form action="" className="form-add-friend">
            <label htmlFor="">👫 Friend Name</label>
            <input type="text" placeholder="Name" />

            <label htmlFor="">📸 Image URL</label>
            <input type="text" placeholder="Image URL" />
            
            <button>Tambah</button>
        </form>
    );
}