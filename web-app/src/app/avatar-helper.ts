export class AvatarHelper{

  static getAvatarSrc(avatarId: number): string{
    switch(avatarId){
        case 1:
            return "images/avatar.svg";
        case 2:
            return "images/avatar_2.svg";
        case 3:
            return "images/avatar_3.svg";
        case 4:
            return "images/avatar_4.svg";
        default:                
            return "images/avatar.svg";
    }
  }

}