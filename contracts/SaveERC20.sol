// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SaveERC20 {
    // User Deposit Mapping
    // This keeps track of each user token deposit.
    mapping(address => mapping(address => uint)) UserDeposit;

    // Function to deposit token
    function DepositERC20(
        address _tokenCA,
        uint256 _amount
    ) external returns (bool) {
        require(
            IERC20(_tokenCA).balanceOf(msg.sender) > 0,
            "You Don't Have enough token"
        );

        IERC20(_tokenCA).transferFrom(msg.sender, address(this), _amount);

        UserDeposit[msg.sender][_tokenCA] =
            UserDeposit[msg.sender][_tokenCA] +
            _amount;

        return true;
    }

    // Function to Withdraw token from contract
    function WithdrawERC20(
        address _tokenCA,
        uint256 _amount
    ) external returns (bool) {
        require(
            UserDeposit[msg.sender][_tokenCA] >= _amount,
            "You Don't have this token Deposited"
        );

        IERC20(_tokenCA).transfer(msg.sender, _amount);

        UserDeposit[msg.sender][_tokenCA] =
            UserDeposit[msg.sender][_tokenCA] -
            _amount;

        return true;
    }

    // Function to view User token deposits.
    function GetUserDepositBalance(
        address _account,
        address _tokenCA
    ) external view returns (uint256) {
        return UserDeposit[_account][_tokenCA];
    }
}
