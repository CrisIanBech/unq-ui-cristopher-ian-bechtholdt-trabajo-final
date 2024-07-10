import { useState } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Button, { variants } from '../Button/Button';
import DifficultyOption from '../DifficultyOption/DifficultyOption';
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import './DifficultySelector.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const DifficultySelector = ({ difficulties, onDifficultySelected }) => {

  const [actualDifficulty, setActualDifficulty] = useState(difficulties[0])

  const currentDifficultyChanged = (previousSlide, { currentSlide }) => {
    const newDifficulty = difficulties[currentSlide]
    setActualDifficulty(newDifficulty)
  }

  const onContinuePress = () => {
    onDifficultySelected(actualDifficulty)
  }

  return (
    <>
      <Carousel
        afterChange={currentDifficultyChanged}
        customLeftArrow={<PreviousButton />}
        customRightArrow={<NextButton />}
        className="difficulty-selector"
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        keyBoardControl={true}
        transitionDuration={500}
      >
        {difficulties.map((difficulty, index) => {
          const difficultyInfo = {actual: index, max: difficulties.length}
          return <DifficultyOption difficultyInfo={difficultyInfo} key={difficulty} difficulty={difficulty} />
        })}
      </Carousel>
      <Button onClick={onContinuePress} variant={variants.validation} isOption={false} content={"CONTINUAR"} />
    </>
  );
};

export default DifficultySelector;
