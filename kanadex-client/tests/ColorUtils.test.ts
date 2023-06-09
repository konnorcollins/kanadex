import { assert, describe, expect, it } from 'vitest'


import {  getColorString, translateColor, getColorValues } from "../src/features/ColorPalettes/ColorUtils"


describe('getColorString', () => {
  it('white', () => {
    const WHITE_HEX = "000000"
    const R = 0;
    const G = 0;
    const B = 0;

    const result = getColorString(R, G, B);

    assert.equal(result, WHITE_HEX);
  })

  it('black', () => {
    const BLACK_HEX = "ffffff"
    const R = 255;
    const G = 255;
    const B = 255;

    const result = getColorString(R, G, B);

    assert.equal(result, BLACK_HEX);
  })

});

// describe('translateColor', () => {});

describe('getColorValues', () => {
    it('white', () => {
        const WHITE_HEX = "000000"
        const R = 0;
        const G = 0;
        const B = 0;

        const [result_r, result_g, result_b] = getColorValues(WHITE_HEX);


        assert.equal(result_r, R);
        assert.equal(result_g, G);
        assert.equal(result_b, B);
    })

    it('black', () => {
        const BLACK_HEX = "ffffff"
        const R = 255;
        const G = 255;
        const B = 255;

        const [result_r, result_g, result_b] = getColorValues(BLACK_HEX);


        assert.equal(result_r, R);
        assert.equal(result_g, G);
        assert.equal(result_b, B);
    })
});