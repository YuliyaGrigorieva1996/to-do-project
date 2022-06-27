import React from "react";
import { useSelector } from "react-redux";
import '../../style/statistic.scss'


const Statistic = () => {
    const count = useSelector(store => store.statistic.all);
    const edited = useSelector(store => store.statistic.edited);
    const deleted = useSelector(store => store.statistic.deleted);
    const firstDate = useSelector(store => store.statistic.firstDate);
    const lastDate = useSelector(store => store.statistic.lastDate)
    return (
        <div className="statistic-wrapper">
            <div className="first-date">
                <div className="statistic-item-wrapper">
                    <p className="statistic-item-header" >Time and date of first to do: </p>
                    <p className="statistic-item-count">{firstDate ? firstDate : 'there is no tasks yet'}</p>
                </div>

            </div>
            <div className="last-date">
                <div className="statistic-item-wrapper">
                    <p className="statistic-item-header">Time and date of last to do: </p>
                    <p className="statistic-item-count">{lastDate ? lastDate : 'there is no tasks yet'}</p>
                </div>
            </div>
            <div className="deleted-todo" >
                <div className="statistic-item-wrapper">
                    <p className="statistic-item-header">Amount of deleted to do: </p>
                    <p className="statistic-item-count number">{deleted}</p>
                </div>

            </div>
            <div className="edited-todo">
                <div className="statistic-item-wrapper">
                    <p className="statistic-item-header">Amount of edited to do: </p>
                    <p className="statistic-item-count number">{edited}</p>
                </div>

            </div>
            <div className="all-todo">
                <div className="statistic-item-wrapper all-item" >
                    <p className="statistic-item-header">Amount of all to do: </p>
                    <p className="statistic-item-count number">{count}</p>
                </div>

            </div>

        </div>
    )
}

export default Statistic;