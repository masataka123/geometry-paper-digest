---
layout: paper
title: "Coupled Pklt Tuples and Varieties of Pklt Type"
title_ja: "結合pklt組とpklt型多様体"
authors: "Donghyeon Kim, Dae-Won Lee"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We introduce asymptotic multiplier ideal sheaves and log canonical thresholds associated with tuples of pseudoeffective divisors on a projective klt pair. We prove that the threshold of a coupled potentially klt tuple is computed by a quasi-monomial valuation. For varieties of potentially klt type, we prove that every big divisor admits a birational Zariski decomposition with semiample positive part. We also prove finite generation of multisection rings of big divisors and give a criterion for a variety of potentially klt type to be a Mori dream space.
topic: algebraic-geometry
tags:
  - singularities
  - birational-geometry
  - multiplier-ideals-extension
arxiv_id: "2609.11107v1"
arxiv_url: "https://arxiv.org/abs/2609.11107"
arxiv_submitted: "2026-09-10"
arxiv_updated: "2026-09-10"
summary: >-
  射影klt対上の擬有効因子の組に対し、結合漸近乗数イデアルとlog canonical thresholdを導入し、結合pkltなら閾値を準単項付値が計算することを示す。pklt型多様体上では任意のbig因子の半豊富な正部分を持つ双有理Zariski分解、big因子の多重切断環の有限生成、Mori dream space判定を得る。
abstract_en: >-
  We introduce asymptotic multiplier ideal sheaves and log canonical thresholds associated with tuples of pseudoeffective divisors on a projective klt pair. We prove that the threshold of a coupled potentially klt tuple is computed by a quasi-monomial valuation. For varieties of potentially klt type, we prove that every big divisor admits a birational Zariski decomposition with semiample positive part. We also prove finite generation of multisection rings of big divisors and give a criterion for a variety of potentially klt type to be a Mori dream space.
summary_en: ""
abstract_ja: >-
  射影klt対上の擬有効 $\mathbb Q$-Cartier因子の組に付随する漸近乗数イデアル層とlog canonical thresholdを導入する。結合potentially klt組の閾値は準単項付値によって計算される。potentially klt型多様体については、任意のbig因子が半豊富な正部分を持つ双有理Zariski分解を備えることを示す。さらにbig因子の組の多重切断環の有限生成を証明し、potentially klt型多様体がMori dream spaceとなるための判定条件を与える。
abstract_source_url: "https://arxiv.org/abs/2609.11107"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.11107](https://arxiv.org/abs/2609.11107)
- **著者:** Donghyeon Kim, Dae-Won Lee
- **初回投稿日:** 2026年9月10日
- **最終更新日:** 2026年9月10日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

potentially klt（pklt）条件は、log discrepancyから反標準因子の漸近消滅次数を引いた量が一様に正であることを要求する。本論文は単一因子ではなく、擬有効因子の組に対して漸近消滅次数を加え合わせる結合版を導入する。

第一の結果は、結合pklt組のlog canonical thresholdが準単項付値によって実現されることである。これにより結合pklt性が閾値 $>1$ という数値条件で特徴づけられ、族の幾何学的生成ファイバーへの移行も得られる。

第二の結果群はpklt型多様体の双有理幾何に関するものである。任意のbig因子に半豊富な正部分を持つ双有理Zariski分解が存在し、big因子の有限個の組から作る多重切断環が有限生成となる。

さらに可動錐の非零部分がbig錐に含まれるという仮定の下で、pklt型多様体がMori dream spaceになる。閾値の付値論的制御から因子環の有限生成へ進む点が論文の中心である。

## 背景と問題設定

射影klt対 $(X,\Delta)$ と擬有効 $\mathbb Q$-Cartier因子の組 $\mathbf D=(D_1,\ldots,D_r)$ に対し、付値 $\nu$ 上の漸近次数を

$$
\sigma_{\mathbf D}(\nu)=\sum_{i=1}^r\sigma_\nu(D_i)
$$

と置く。これは一般には和 $\sum_iD_i$ の漸近次数とは一致しない。結合log canonical thresholdは

$$
\operatorname{lct}_\sigma(X,\Delta,\mathbf D)
=\inf_{\nu\in\operatorname{Val}_X^*}
\frac{A_{X,\Delta}(\nu)}{\sigma_{\mathbf D}(\nu)}
$$

で定義される。結合pklt性は、全ての素因子付値について $A_{X,\Delta}(E)-\sigma_{\mathbf D}(E)$ が一様に正であることをいう。

## 主結果

### 閾値を計算する付値（Theorem 1.1 and Corollary 1.2）

$(X,\Delta)$ を射影klt対、$\mathbf D$ を擬有効因子の組とする。$(X,\Delta,\mathbf D)$ が結合pkltなら、$\operatorname{lct}_\sigma$ を計算する準単項付値が存在する。また結合pklt性は

$$
\operatorname{lct}_\sigma(X,\Delta,\mathbf D)>1
$$

と同値である。

### 双有理Zariski分解（Theorem 1.4）

$X$ がpklt型射影多様体なら、任意のbig $\mathbb Q$-Cartier因子は、半豊富な正部分を持つ双有理Zariski分解を備える。

### 多重切断環の有限生成（Theorem 1.6）

pklt型多様体 $X$ 上のbig因子 $D_1,\ldots,D_r$ に対し、

$$
R(X;D_1,\ldots,D_r)
=\bigoplus_{(m_1,\ldots,m_r)\in\mathbb N^r}
H^0\!\left(X,\sum_{i=1}^r m_iD_i\right)
$$

は有限生成である。

### Mori dream space判定（Theorem 1.7）

$X$ が $\mathbb Q$-factorialなpklt型多様体で、$\operatorname{Pic}(X)_\mathbb Q=N^1(X)_\mathbb Q$ かつ

$$
\operatorname{Mov}(X)\setminus\{0\}\subset\operatorname{Big}(X)
$$

を満たすなら、$X$ はMori dream spaceである。

## 証明の見取り図

閾値の実現には、準単項付値の錐上で $\sigma_{\mathbf D}$ が凹であることと連続性を用い、単一の漸近次数に対する既存の付値論的戦略を因子の組へ拡張する。Introductionでは、この結果から結合漸近・diminished乗数イデアルを整備し、生成ファイバーへの移行を示すと説明される。

pklt型多様体への応用では、双有理Zariski分解をまず得て、その半豊富な正部分を通じて因子環の有限生成を導く。最後に可動錐の仮定を使い、有限生成をMori dream spaceの錐分解へ結び付ける。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.11107](https://arxiv.org/abs/2609.11107)
- **Introduction:** Section 1, pp. 1--3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.4, 1.6, 1.7; Corollaries 1.2, 1.3, 1.5
- **論文構成の説明:** Section 1末尾, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
