import { profileIntro } from '../../CONSTANT/CONSTANT';
import { PersonalInfoStyled, ProfilePhotoContainer, ProfilePhoto, PersonalText } from './PersonalInfo.styled';
import { ThreeDText } from '../../commonStyles/common.styled';


export default function PersonalInfo() {
  return (
    
    <PersonalInfoStyled>

      <ProfilePhotoContainer>
        <ProfilePhoto />
      </ProfilePhotoContainer>

      <PersonalText>
        <h2>Prabin K C</h2>
        <ThreeDText>{profileIntro}</ThreeDText>
      </PersonalText>

    </PersonalInfoStyled>
  );
}
