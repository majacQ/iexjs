/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _get, _quoteSymbols } from "../common";
import { Client } from "../client";

/**
 * Returns an array of symbols up to the top 10 matches. Results will be sorted for relevancy. Search currently defaults to equities only, where the symbol returned is supported by endpoints listed under the Stocks category.
 *
 * https://iexcloud.io/docs/api/#search
 *
 * @param {string} fragment search fragment
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const search = (
  fragment,
  token = "",
  version = "",
  filter = "",
  format = "json",
) =>
  _get({
    url: `search/${_quoteSymbols(fragment)}`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.search = function (fragment, filter, format) {
  return search(fragment, this._token, this._version, filter, format);
};
