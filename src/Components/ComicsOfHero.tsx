import React from 'react';
import { JsxElement } from 'typescript';
import {
  getAPIResource, getAllHeroes, getHeroeByID, getAllComicsOfHero,
} from '../api/api';

class ComicsOfHero extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      comics: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
    const { match } = this.props;
    getAllComicsOfHero(match.params.heroID).then((res) => {
      this.setState({ comics: res.data.data.results });
    });
  }

  render() {
    const { comics }: any = this.state;
    console.log(this.state);
    console.log(this.props);

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
