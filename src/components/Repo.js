import React, { Component } from "react";
import "./repo.css";
const axios = require("axios");

export default class Repo extends Component {
    constructor() {
        super();
        this.state = {
            parr: [1],
            repo: [],
            currPage: 1,
            language: "javascript",
            sortBy: "stars",
            sortOrder: "desc",
            dataPerPage: "9",
            text: "",
        };
    }

    async componentDidMount() {
        const url = `https://api.github.com/search/repositories?q=language:${this.state.language}&sort=${this.state.sortBy}&order=${this.state.sortOrder}&page=${this.state.currPage}&per_page=${this.state.dataPerPage}`;
        const d = await axios.get(url);
        this.setState({ repo: d.data.items });
    }

    updatePage = () => {
        const url = `https://api.github.com/search/repositories?q=language:${this.state.language}&sort=${this.state.sortBy}&order=${this.state.sortOrder}&page=${this.state.currPage}&per_page=${this.state.dataPerPage}`;
        axios.get(url).then((d) => {
            this.setState({ repo: d.data.items });
        });
    };

    searchByName = (n) => {
        this.setState({
            parr: [1],
            currPage: 1,
            sortBy: "stars",
            sortOrder: "desc",
        });
        const url = `https://api.github.com/search/repositories?&q=${this.state.text}&sort=stars&order=desc&page=1&per_page=${this.state.dataPerPage}`;
        axios.get(url).then((d) => {
            this.setState({ repo: d.data.items });
        }, this.updatePage);
    };

    handlePrev = () => {
        if (this.state.currPage !== 1) {
            this.setState(
                {
                    currPage: this.state.currPage - 1,
                },
                this.updatePage
            ); // set state is async (takes time) so we will pass update page as callback ni to pehle update page chal jaega...
        }
    };

    handleNext = () => {
        if (this.state.parr.length === this.state.currPage) {
            const narr = [...this.state.parr, this.state.parr.length + 1];
            this.setState(
                {
                    parr: narr,
                    currPage: this.state.currPage + 1,
                },
                this.updatePage
            );
        } else {
            this.setState(
                {
                    currPage: this.state.currPage + 1,
                },
                this.updatePage
            );
        }
    };

    serialNavigation = (n) => {
        this.setState({ currPage: n }, this.updatePage);
    };

    render() {
        return (
            <>
                <div>
                    <h1 className="main-header">RepoHub</h1>
                    <h6 className="text-center">
                        A GitHub Repository Hub by{" "}
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/siddharth-saurav/"
                        >
                            Siddharth Saurav (IIT-BHU)
                        </a>
                    </h6>
                </div>
                <div className="options">
                    <select
                        class="form-select"
                        onChange={(e) => {
                            this.setState(
                                { language: e.target.value },
                                this.updatePage
                            );
                        }}
                    >
                        <option selected>Language</option>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="javascript">Javascript</option>
                        <option value="go">Go</option>
                        <option value="kotlin">Kotlin</option>
                    </select>
                    <form
                        class="row g-3"
                        onSubmit={(e) => {
                            e.preventDefault();
                            this.searchByName();
                        }}
                    >
                        <div class="col-auto">
                            <label for="inputPassword2" class="visually-hidden">
                                Search by Name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="inputPassword2"
                                placeholder="Search By Name"
                                value={this.state.text}
                                onChange={(e) => {
                                    this.setState({ text: e.target.value });
                                }}
                            />
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">
                                Click Me!
                            </button>
                        </div>
                    </form>
                </div>
                {this.state.repo.length === 0 ? (
                    <div class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="repo-list">
                        {this.state.repo.map((data) => (
                            <div className="card">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        {data.name && data.name}
                                    </h5>
                                    <p className="card-text">
                                        <span class="bold-text">
                                            👨 Owner's Name:{" "}
                                        </span>
                                        {data.owner.login && data.owner.login}
                                    </p>
                                    <p className="card-text">
                                        <span class="bold-text">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="#000"
                                                    stroke-width="2"
                                                    d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"
                                                />
                                            </svg>{" "}
                                            Language:{" "}
                                        </span>
                                        {data.language && data.language}
                                    </p>
                                    <p className="card-text">
                                        <span class="bold-text">
                                            📖 Description:{" "}
                                        </span>
                                        {data.description &&
                                            data.description.substring(0, 500)}
                                        {data.description &&
                                        data.description.substring(0, 500)
                                            .length > 498
                                            ? "..."
                                            : ""}
                                    </p>
                                    <p className="card-text">
                                        <span class="bold-text">
                                            ⭐ Stars Count:{" "}
                                        </span>
                                        {data.stargazers_count &&
                                            data.stargazers_count}
                                    </p>
                                    <p className="card-text">
                                        <span class="bold-text">
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="octicon octicon-repo-forked color-fg-muted mr-2"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                                ></path>
                                            </svg>{" "}
                                            Fork's Count:{" "}
                                        </span>
                                        {data.forks_count && data.forks_count}
                                    </p>
                                    <a
                                        href={data.svn_url && data.svn_url}
                                        target="_blank"
                                        className="btn btn-primary mt-auto"
                                    >
                                        Go To Repository
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="pagination-wrapper">
                    <div className="sortWrapper">
                        <select
                            class="form-select sort"
                            onChange={(e) => {
                                this.setState(
                                    { sortBy: e.target.value },
                                    this.updatePage
                                );
                            }}
                        >
                            <option selected>Sort By</option>
                            <option value="stars">Stars</option>
                            <option value="name">Name</option>
                        </select>
                        <select
                            class="form-select sort"
                            onChange={(e) => {
                                this.setState(
                                    { sortOrder: e.target.value },
                                    this.updatePage
                                );
                            }}
                        >
                            <option selected>Sort Order</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    onClick={this.handlePrev}
                                >
                                    Previous
                                </a>
                            </li>
                            {this.state.parr.map((val) => (
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        onClick={() => {
                                            this.serialNavigation(val);
                                        }}
                                    >
                                        {val}
                                    </a>
                                </li>
                            ))}
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    onClick={this.handleNext}
                                >
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <select
                        class="form-select entries"
                        onChange={(e) => {
                            this.setState(
                                { dataPerPage: e.target.value },
                                this.updatePage
                            );
                        }}
                    >
                        <option selected>Entries per Page</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </>
        );
    }
}
