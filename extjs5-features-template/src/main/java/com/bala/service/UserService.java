package com.bala.service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.bala.vo.User;

@Service
public class UserService {
	private final static Logger logger = LoggerFactory
			.getLogger(UserService.class);

	private Map<String, User> userRepository;
	private User user;;

	public UserService() {

		userRepository = new HashMap<>();
		user = generateUser("John Smith", "Reverer Rd, NY");
		userRepository.put(user.getId(), user);
		user = generateUser("Robert Dev", "Jr St. Street, AU");
		userRepository.put(user.getId(), user);
		user = generateUser("Sandy Beach", "Reverer Rd, NY");
		userRepository.put(user.getId(), user);
		user = generateUser("John Arnold", "Roy Rd, CA");
		userRepository.put(user.getId(), user);

	}

	private User generateUser(String name, String address) {
		String id = UUID.randomUUID().toString();
		return new User(id, name, address);
	}

	public Collection<User> getAll() {
		return userRepository.values();
	}

	public User get(String id) {
		return userRepository.get(id);
	}

	public User create(User user) {
		logger.info("entry");
		user = generateUser(user.getName(), user.getAddress());
		userRepository.put(user.getId(), user);
		logger.info("exit");
		return user;
	}

	public User update(String id, User user) {
		User userToBeUpdated = userRepository.get(id);
		if (user.getName() != null) {
			userToBeUpdated.setName(user.getName());
		}
		if (user.getAddress() != null) {
			userToBeUpdated.setAddress(user.getAddress());
		}
		userRepository.put(id, userToBeUpdated);
		return user;
	}

	public void delete(String id) {
		userRepository.remove(id);
	}

}
