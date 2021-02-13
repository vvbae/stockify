import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

  handleInputChange = event => {
    const query = event.target.value;

    setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  // TODO
  // fetch artists from the database
  getData = () => {
    fetch(`http://localhost:4000/restaurants`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });

        setState({
          data,
          filteredData
        });
      });
  };

  componentWillMount() {
    getData();
  };

  return (
    <div className="searchForm">
      <form>
        <input
          placeholder="Artists you wanna invest"
          value={this.state.query}
          onChange={this.handleInputChange}
        />
      </form>
      <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
    </div>
  );
}

export default SearchBar;