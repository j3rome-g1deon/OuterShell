import path from 'path';

import execBuffer from 'exec-buffer';
import isCwebpReadable from 'is-cwebp-readable';
import cwebp from 'cwebp-bin';

import {APP_ROOT} from '../common.js';

export default (options = {}) => input => {
	if (!Buffer.isBuffer(input)) {
		return Promise.reject(new TypeError(`Expected \`input\` to be of type \`Buffer\` but received type \`${typeof input}\``));
	}

	if (!isCwebpReadable(input)) {
		return Promise.resolve(input);
	}

	const args = [
		'-quiet',
		'-mt'
	];

	if (options.preset) {
		args.push('-preset', options.preset);
	}

	if (options.quality) {
		args.push('-q', options.quality);
	}

	if (options.alphaQuality) {
		args.push('-alpha_q', options.alphaQuality);
	}

	if (options.method) {
		args.push('-m', options.method);
	}

	if (options.size) {
		args.push('-size', options.size);
	}

	if (options.sns) {
		args.push('-sns', options.sns);
	}

	if (options.filter) {
		args.push('-f', options.filter);
	}

	if (options.autoFilter) {
		args.push('-af');
	}

	if (options.sharpness) {
		args.push('-sharpness', options.sharpness);
	}

	if (options.lossless) {
		args.push('-lossless');
	}

	if (options.nearLossless) {
		args.push('-near_lossless', options.nearLossless);
	}

	if (options.crop) {
		args.push('-crop', options.crop.x, options.crop.y, options.crop.width, options.crop.height);
	}

	if (options.resize) {
		args.push('-resize', options.resize.width, options.resize.height);
	}

	if (options.metadata) {
		args.push('-metadata', Array.isArray(options.metadata) ? options.metadata.join(',') : options.metadata);
	}

	args.push('-o', execBuffer.output, execBuffer.input);

  const cWebP = path.resolve(APP_ROOT, cwebp);

	return execBuffer({
		args,
		bin: cWebP,
		input
	}).catch(error => {
		error.message = error.stderr || error.message;
		throw error;
	});
};