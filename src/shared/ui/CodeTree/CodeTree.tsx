import { Tree } from 'antd'
import React from 'react'
import styles from './CodeTree.module.scss'
import { ICodeTree } from './CodeTree.types'
const { DirectoryTree } = Tree

const CodeTree: React.FC<ICodeTree> = ({
	treeData,
	defaultExpandedKeys,
	onSelect,
	defaultSelectedKeys,
}) => {
	return (
		<DirectoryTree
			multiple
			defaultExpandedKeys={defaultExpandedKeys}
			onSelect={onSelect}
			treeData={treeData}
			className={styles.tree}
			defaultSelectedKeys={defaultSelectedKeys}
		/>
	)
}

export default CodeTree
