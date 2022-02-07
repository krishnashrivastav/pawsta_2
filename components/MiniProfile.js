function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img 
                className="w-16 h-16 rounded-full border p-[2px]"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F09%2Fdog-dating-1.jpg"
                alt=""
            />
            <div className="flex-1 mx-4">
                <h2 className="font-bold">lucylife_xoox</h2>
                <h3 className="text-sm text-gray-400">Welcome to Pawsta</h3>
            </div>

            <buttons className="text-blue-400 text-sm font-semibold" >Sign Out</buttons>
        </div>
    ); 
}

export default MiniProfile;