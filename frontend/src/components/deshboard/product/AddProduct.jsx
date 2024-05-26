import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  createProduct,
} from "../../../Redux/actions/productAction";
import { useAlert } from "react-alert";
import { NEW_PRODUCT_RESET } from "../../../Redux/constants/productConstants";
import { useNavigate } from "react-router-dom";


export default function AddProduct() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  

  const { loading, error, success } = useSelector((state) => state.newProduct);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [price, setPrice] = useState(0);
  const [Stock, setStock] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  
  const [sizes, setSizes] = useState([]);

 


  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    if (sizes.includes(value)) {
      // If already checked, remove it
      setSizes(sizes.filter((size) => size !== value));
    } else {
      // If not checked, add it
      setSizes([...sizes, value]);
    }
    console.log(sizes)
  };


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Product Created Successfully");
      navigate("/deshboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);



  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("price", price);
    myForm.set("discount", discount);
    myForm.set("discountType", discountType);
    myForm.set("gender", gender);
    myForm.set("category", category);
    myForm.set("Stock", Stock);
    myForm.append("size", sizes);
   
    selectedImages.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };
 

  

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setSelectedImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setSelectedImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };



  return (
    <div className="addproduct">
      <div className="addproduct-title">
        <span>Add New Product</span>
        {/* <span >x</span> */}
      </div>
      <div className="addproduct-item">
        <div className="addproduct-item-1">
          <form action=""
            Content-Type="multipart/from-data"
            onSubmit={createProductSubmitHandler}
          >
            <span className="addproduct-title">Base Information</span>
            <div className="addproduct-border addproduct-1-1">
              <div className="addproduct-div">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="addproduct-div">
                <span>Description</span>
                <textarea
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <span className="addproduct-title">Picture</span>
            <div className="addproduct-border addproduct-1-2">
              {/* <input type="file" accept="image/*" multiple onChange={handleImageChange}  />
                      <span>hii</span> */}

              {imagesPreview.length > 0 && (
                <div className="addproduct-1-2-value">
                  {imagesPreview.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Preview ${index}`} />
                    </div>
                  ))}
                </div>
              )}

              <div className="addproduct-1-2-input">
                <label class="picture" for="picture__input" tabIndex="0">
                  <span class="picture__image"></span>
                </label>
                {/* <input
                  type="file"
                  name="avatar"
                  id="picture__input"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                /> */}
                <input
  type="file"
  id="picture__input"
  accept="image/*"
  multiple
  onChange={createProductImagesChange}
/>

              </div>
            </div>

            <span className="addproduct-title">Details</span>
            <div className="addproduct-border addproduct-1-1">
              <div className="addproduct-1-1-item">
                <div className="addproduct-price">
                  <span>Price</span>
                  <input
                    type="text"
                    placeholder="Enter the Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="addproduct-price">
                  <span>Stock</span>
                  <input
                    type="text"
                    placeholder="Enter the Stock Number"
                    value={Stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
              </div>
              <div className="addproduct-1-1-item">
                <div className="addproduct-price">
                  <span>Discount</span>
                  <input
                    type="text"
                    placeholder="Enter the Discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
                <div className="addproduct-price">
                  <span>Discount Type</span>
                  <input
                    type="text"
                    placeholder="Enter the Discount Type"
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value)}
                  />
                </div>
              </div>

              <div className="addproduct-1-1-item">
                <div className="addproduct-size">
                  <span>Size</span>
                  <div className="addproduct-size-checkobox">
                    {/* <div>
                                <input type="checkbox" id="xxl" name="vehicle1" value="XXL"/>
                                <label for="xxl">XXL</label>
                                </div>
                                <div>
                                <input type="checkbox" id="xl" name="vehicle1" value="XL"/>
                                <label for="xl">XL</label>
                                </div>
                                <div>
                                <input type="checkbox" id="sx" name="vehicle1" value="SX"/>
                                <label for="sx">SX</label>
                                </div>
                                <div>
                                <input type="checkbox" id="m" name="vehicle1" value="M"/>
                                <label for="m">M</label>
                                </div>
                                <div>
                                <input type="checkbox" id="s" name="vehicle1" value="S"/>
                                <label for="s">S</label>
                                </div> */}
                <div>
        <input
          type="checkbox"
          id="xxl"
          name="vehicle1"
          value="XXL"
          checked={sizes.includes("XXL")}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="xxl">XXL</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="xl"
          name="vehicle1"
          value="XL"
          checked={sizes.includes("XL")}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="xl">XL</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="sx"
          name="vehicle1"
          value="SX"
          checked={sizes.includes("SX")}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="sx">SX</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="m"
          name="vehicle1"
          value="M"
          checked={sizes.includes("M")}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="m">M</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="s"
          name="vehicle1"
          value="S"
          checked={sizes.includes("S")}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="s">S</label>
      </div>

                  </div>
                </div>
                <div className="addproduct-gender">
                  <span>Gender</span>
                  <div className="addproduct-gender-checkbox">
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="men"
                        value="Men"
                        checked={gender === "Men"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label for="men">Men</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="women"
                        value="Women"
                        checked={gender === "Women"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label for="women">Women</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="addproduct-title">Category</span>
            <div className="addproduct-border addproduct-1-1">
              <select
                name="cars"
                id="cars"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {/* <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option>
                        <option value="audi">Audi</option> */}
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="addproduct-item-2"></div>
      </div>
    </div>
  );
}
