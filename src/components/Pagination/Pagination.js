import classes from './Pagination.module.css';

const Pagination = (props) => {
  return (
    <div className={classes['pagination-container']}>
      <button
        className={classes['pagination-button']}
        disabled={!props.hasPreviousPage}
        type='button'
        onClick={props.onClickPreviousPage}>
        &lt; PREV
      </button>

      <p className={classes['pagination-number']}>PAGE {props.currentPage}</p>

      <button
        className={classes['pagination-button']}
        disabled={!props.hasNextPage}
        type='button'
        onClick={props.onClickNextPage}>
        NEXT &gt;
      </button>
    </div>
  )
}

export default Pagination;