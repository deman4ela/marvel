import React from 'react';
import { JsxElement } from 'typescript';
import {
  getAPIResource, getAllHeroes, getHeroeByID, getAllComicsOfHero,
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
    console.log(this.props);
    const { match } = this.props;
    getAllComicsOfHero(match.params.heroID).then((res) => {
      this.setState({ comics: res.data.data.results, isLoading: false });
    });
  }

  render() {
    const { comics, isLoading }: any = this.state;
    console.log(this.props);

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
