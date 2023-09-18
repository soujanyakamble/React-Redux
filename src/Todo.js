import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditeAction, addDataAction, deleteAction, getDataAction } from "./redux/Action/Action";

export default function Todo() {
  const { userdata  , DataAdded  , deleted} = useSelector((state) => state.alluser);
  console.log(userdata && userdata);

  const dispatch = useDispatch();
  const [useerUpdate, setuseerUpdate] = useState({
    name : "" ,
    number : ""
  })
  const [UserReduxdata, setUserReduxdata] = useState({
    name: "",
    number: "",
  });

  useEffect(() => {
    dispatch(getDataAction());
  }, [DataAdded , deleted]);

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Redux-Crud</div>
              <div class="card-body">
                <div>
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    value={UserReduxdata.name}
                    onChange={(e) =>
                      setUserReduxdata({
                        ...UserReduxdata,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label for="name" class="form-label">
                    Number
                  </label>
                  <input
                    value={UserReduxdata.number}
                    onChange={(e) =>
                      setUserReduxdata({
                        ...UserReduxdata,
                        number: e.target.value,
                      })
                    }
                    type="number"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Number"
                  />
                </div>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  onClick={(e) => dispatch(addDataAction(UserReduxdata))}
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <table class="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Number</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                 {
                  userdata.map((item , index) => <>
                  <tr>
                  <th scope="row">{index +1}</th>
                  <td>{item.name}</td>
                  <td>{item.number}</td>
                  <td><button  onClick={e => setuseerUpdate(item)}  data-bs-toggle="modal" data-bs-target="#exampleModal"  type="button" class="btn btn-warning">Edit</button></td>
                  <td><button  onClick={e => dispatch(deleteAction(item.id))} type="button" class="btn btn-danger">Delete</button></td>
                </tr>
                
                  </>)
                 }
              </tbody>
            </table>
          </div>
        </div>
      </div>


    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="card-body">
                <div>
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    value={useerUpdate.name}
                    onChange={(e) =>
                      setuseerUpdate({
                        ...useerUpdate,
                        name: e.target.value,
                      })
                    }
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label for="name" class="form-label">
                    Number
                  </label>
                  <input
                    value={useerUpdate.number}
                    onChange={(e) =>
                      setuseerUpdate({
                        ...useerUpdate,
                        number: e.target.value,
                      })
                    }
                    type="number"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Number"
                  />
                </div>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button"  onClick={e=> dispatch(EditeAction(useerUpdate))}  class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
