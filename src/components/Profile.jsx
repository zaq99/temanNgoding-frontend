import Button from "./Button";
import { OwnerPhoto } from "../assets";

const Profile = () => {
    return (
        <div className="mt-6 flex justify-between">
            <div className="flex items-center gap-3">
                <img src={OwnerPhoto} alt="" className="w-12 h-12" />
                <h4 className="font-semibold">Orang Baik</h4>
            </div>
            <Button text="Javascript" className="bg-kuning-300 py-0" />
        </div>
    );
};

export default Profile;
