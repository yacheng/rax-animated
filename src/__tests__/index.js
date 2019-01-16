import {createElement, Component} from 'rax';
import renderer from 'rax-test-renderer';
import Anim from '../';

describe('Anim', () => {
  it('test typeof Anim', () => {
    console.log(typeof Anim);
    expect(typeof Anim).toEqual('object');
  });
});
