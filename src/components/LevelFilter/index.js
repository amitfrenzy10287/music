import React from 'react';
import Level from '../Level';

import {
    LevelWrapper,
    LevelIn,
    CloseBtn,
    SongText,
    BtnSettings,
    LevelContainer
} from './style';

const LevelFilter = (props)=>{

  const { filterByLevel,activeLevel,clearFilteredSongs,percentageLevel,toggleLevelSettings,showLevel } = props;
  let levels  = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const data = levels.map((lev)=>{
      return(
          <LevelIn key={lev} active={activeLevel === lev ? 'active' :''} onClick={()=>filterByLevel(lev)}>
              <Level
                  strokeWidth="10"
                  sqSize="200"
                  level={lev}
                  percentage={Math.round(lev / 15 * 100)}
              />
          </LevelIn>
      );
  });

  return(
      <div>
          <SongText>
              Filter by Level : <BtnSettings active={showLevel} onClick={()=>toggleLevelSettings()} />
          </SongText>
          <LevelContainer show={showLevel} >
              <SongText>
                  Song Difficulty
              </SongText>
              <LevelWrapper>
                  {data}
                  <CloseBtn onClick={()=>clearFilteredSongs()} />
              </LevelWrapper>
          </LevelContainer>
      </div>
  );
};

export default LevelFilter;
