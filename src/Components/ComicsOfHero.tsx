import React from 'react';
import { JsxElement } from 'typescript';
import {
  getAPIResource, getAllHeroes, getAllComicsOfHero,
} from '../api/api';
import ProgressBar from './ProgressBar';
import ComicsListCreation from './ComicsListCreation';

class ComicsOfHero extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      comics: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const { match } = this.props;
    getAllComicsOfHero(match.params.heroID).then((results) => {
      this.setState({ comics: results, isLoading: false });
    });
  }

  render() {
    const { comics, isLoading }: any = this.state;

    return (
      <div>
        <h1 className='comics__heading'>
          Welcome the hero comics!
        </h1>
        <ProgressBar isLoading={isLoading} />
        <ComicsListCreation comics={comics}/>
      </div>
    );
  }
}

export default ComicsOfHero;
