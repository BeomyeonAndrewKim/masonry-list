import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSibaImages, clearSibaList } from '../redux/actions';

import Buttons from './Buttons';
import List from './List';
import Loading from './Loading';

import './index.scss';

class App extends Component {
  handleScrollObserver = (entries, observer) => {
    const intersectionRatio = entries[0].intersectionRatio;
    if (intersectionRatio > 0) {
      this.props.getSibaImages({ resizeGridGap: this.resizeAllMasonryItems });
    }
  };

  componentWillUnmount = () => {
    if (!!this.scrollObserver) this.scrollObserver.disconnect();
    window.removeEventListener('resize', this.resizeAllMasonryItems);
  };

  onClickGetDogsBtn = () => {
    if (!!this.props.sibaImages.length) return;
    this.props.getSibaImages({ resizeGridGap: this.resizeAllMasonryItems });

    this.scrollObserver = new IntersectionObserver(this.handleScrollObserver);
    this.scrollObserver.observe(this.loadingEl);

    window.addEventListener('resize', this.resizeAllMasonryItems);
  };

  onClickClearDogsBtn = () => {
    if (!!this.scrollObserver) this.scrollObserver.disconnect();
    window.removeEventListener('resize', this.resizeAllMasonryItems);
    this.props.clearSibaList();
  };

  resizeMasonryItem = item => {
    const grid = this.listEl,
      rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
      rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
      rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = 'span ' + rowSpan;
  };

  resizeAllMasonryItems = event => {
    const allItems = this.listEl.children;
    if (event && event.type === 'resize') {
      for (const item of allItems) {
        this.resizeMasonryItem(item);
      }
    } else {
      for (const item of allItems) {
        item.onload = () => this.resizeMasonryItem(item);
      }
    }
  };

  render() {
    const { sibaImages, isLoading } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h3>
            wanted-<code>CODE</code>-test
          </h3>
        </header>
        <Buttons getSibaImages={this.onClickGetDogsBtn} clearSibaList={this.onClickClearDogsBtn} />
        <List sibaImages={sibaImages} ref={listRef => (this.listEl = listRef)} />
        <Loading isLoading={isLoading} ref={loadingRef => (this.loadingEl = loadingRef)} />
      </div>
    );
  }
}

export default connect(
  state => ({ sibaImages: state.sibaImages, isLoading: state.isLoading }),
  dispatch => bindActionCreators({ getSibaImages, clearSibaList }, dispatch)
)(App);
