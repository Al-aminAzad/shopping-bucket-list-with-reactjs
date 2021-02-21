import brandLogo from '../../assets/brand-logo/brand-logo.svg';
import moreMenu from '../../assets/icons/more-menu.png';
import plusIcon from '../../assets/icons/plus-icon.png';
import deleteIcon from '../../assets/icons/delete-icon.png';
const BucketPage = () => {
  return (
    <div>
      <nav className="nav __shadow--lg">
        <div className="container nav__container">
          <div className="nav__brand">
            <img className="nav__brand-logo" src={brandLogo} alt="Brand Logo" />
            <h1 className="nav__brand-name">Stack Learner</h1>
          </div>
          <div className="nav__menu nav__menu--right">
            <div className="nav__menu-items">
              <img className="nav__menu-icon" src={moreMenu} alt="More Menu" />
            </div>
          </div>
        </div>
      </nav>
      {/* Main content body */}
      <main className="container __margin--ylg">
        {/* Add new bucket section */}
        <div className="section add-item __shadow--sm">
          <div className="add-item__relative">
            <div className="add-item__input">
              <img className="add-item__icon" src={plusIcon} alt="Create new bucket" />
              <input className="add-item__input-field" type="text" placeholder="Create new bucket" />
            </div>
          </div>
        </div>

        {/* Buckets table */}
        <div className="section table __shadow--sm">
          <table className="table__table">
            <thead className="table__thead">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th className="align-right">Actions</th>
              </tr>
            </thead>
            <tbody className="table__tbody">
              <tr>
                <th>
                  <div className="table__item-name">
                    <input type="checkbox" />
                    <label>Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span className="auto-grow-input" role="textbox" aria-placeholder="500G" contenteditable>
                      2KG
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span className="auto-grow-input" role="textbox" contenteditable>
                      250
                    </span>
                    <span>BDT</span>
                  </div>
                </th>
                <th className="align-right">
                  <button className="icon-button">
                    <img className="icon-button__icon" src={deleteIcon} alt="Delete" />
                  </button>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="table__item-name">
                    <input type="checkbox" />
                    <label>Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span className="auto-grow-input" role="textbox" aria-placeholder="500G" contenteditable>
                      2KG
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span className="auto-grow-input" role="textbox" contenteditable>
                      250
                    </span>
                    <span>BDT</span>
                  </div>
                </th>
                <th className="align-right">
                  <button className="icon-button">
                    <img className="icon-button__icon" src={deleteIcon} alt="Delete" />
                  </button>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="table__item-name">
                    <input type="checkbox" />
                    <label>Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span className="auto-grow-input" role="textbox" aria-placeholder="500G" contenteditable>
                      2KG
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span className="auto-grow-input" role="textbox" contenteditable>
                      250
                    </span>
                    <span>BDT</span>
                  </div>
                </th>
                <th className="align-right">
                  <button className="icon-button">
                    <img className="icon-button__icon" src={deleteIcon} alt="Delete" />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default BucketPage;
