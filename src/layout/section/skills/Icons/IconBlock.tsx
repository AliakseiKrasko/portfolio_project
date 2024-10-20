import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const IconBlock = () => {
    return (
        <SkillIcon>
            <Icon iconId={`logoSquare`} fill={`#C778DD`} height={`156`} width={`156`} viewBox={`0 0 156 156`}
                  style={{ position: 'absolute', left: '260px', top: '1350px' }}/>
            <Icon iconId={`rectangle`}  height={`86`} width={`86`} viewBox={`0 0 86 86`}
                  style={{ position: 'absolute', left: '480px', top: '1070px' }} />
            <Icon iconId={`rectangleMini`}  height={`52`} width={`52`} viewBox={`0 0 52 52`}
                  style={{ position: 'absolute', left: '580px', top: '1420px' }}/>
            <Icon iconId={`square`} fill={`#C778DD`} height={`84`} width={`84`} viewBox={`0 0 84 84`}
                  style={{ position: 'absolute', left: '225px', top: '1095px' }} />

            <Icon iconId='square' fill={`#C778DD`} height={`84`} width={`84`} viewBox={`0 0 84 84`}
                  style={{ position: 'absolute', left: '460px', top: '1300px' }}  />
        </SkillIcon>
    );
};


const SkillIcon = styled.div` 
    display: flex;
    width: 50%;
`