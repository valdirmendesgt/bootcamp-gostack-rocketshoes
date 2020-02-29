import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from "../../util/format";

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price)
    }));
    this.setState({
      products: data,
      loading: false
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  }

  render() {
    const { loading, products } = this.state;
    const { amount } = this.props;

    if (loading) {
      return <h1>Carregando...</h1>;
    }

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>

            <button type="button" onClick={() => this.handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 
                {amount[product.id] || 0}
              </div>

              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);