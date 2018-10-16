export class ErrorTyper {
  constructor(error) {
    this.error = error;
  }

  get isNetworkError() {
    const e = this.error;

    return e && e.message && e.message === 'Error: Network Error';
  }

  get isInsufficientBalance() {
    const e = this.error;

    return (
      e
      && e.response
      && e.response.data
      && e.response.data.extras
      && e.response.data.extras.result_codes
      && e.response.data.extras.result_codes.transaction
      && e.response.data.extras.result_codes.transaction
        === 'tx_insufficient_balance'
    );
  }
}
