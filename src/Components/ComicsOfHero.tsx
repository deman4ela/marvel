import React from 'react';
import { JsxElement } from 'typescript';
import {
  getAPIResource, getAllHeroes, getAllComicsOfHero,
} from '../api/api';

class ComicsOfHero extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      comics: [],
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
        <h1>
          Welcome comics!
        </h1>
        <div>
          {
            comics.length ? comics.map((comic:any) => (
              <div>
                <div key={comic.id}>
                  <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt='' />
                  {' '}
                  <br />
                  {comic.title}
                  {' '}
                  <br />
                  {comic.description}
                  {' '}
                  <br />
                              Number of pages:
                  {' '}
                  {comic.pageCount}

                  <br />
                </div>
              </div>
            )) : null
          }
        </div>
      </div>
    );
  }
}

export default ComicsOfHero;
