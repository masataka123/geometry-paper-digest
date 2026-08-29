---
layout: paper
title: "Remarks on Relative Canonical Bundles and Algebraicity Criteria for Foliations in Kähler context"
title_ja: "Kähler設定における相対標準束と葉層の代数性判定"
authors: "Junyan Cao, Mihai Păun"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  In this note, motivated by the recent preprint of W. Ou, we pursue three main objectives. The first is to make progress towards the positivity of the relative canonical bundle in the Kähler setting. In the second part, we provide a proof of Ou's algebraicity criterion. Finally, based on the two previous parts, we slightly extend his uniruledness criterion.
topic: several-complex-variables
tags:
  - positivity
  - foliations
  - pluripotential-theory
arxiv_id: "2502.02183v2"
arxiv_url: "https://arxiv.org/abs/2502.02183"
arxiv_submitted: "2025-02-04"
arxiv_updated: "2025-02-24"
summary: >-
  コンパクトKähler多様体上で相対標準束の擬有効性、葉層の代数性判定、非単線織性判定を統一的に扱う。Bergman核による計量構成とLelong数の解析を用い、射影性に頼らない相対正値性と葉層の幾何を導く。
abstract_en: >-
  In this note, motivated by the recent preprint of W. Ou, we pursue three main objectives. The first is to make progress towards the positivity of the relative canonical bundle in the Kähler setting. In the second part, we provide a proof of Ou's algebraicity criterion. Finally, based on the two previous parts, we slightly extend his uniruledness criterion.
summary_en: ""
abstract_ja: >-
  本稿はW. Ouのプレプリントを動機として三つの課題を扱う。Kähler設定における相対標準束の正値性へ前進し、Ouの代数性判定に別証明を与え、さらにそれらをもとに非単線織性判定をわずかに拡張する。
abstract_source_url: "https://arxiv.org/abs/2502.02183"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "http://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2502.02183v2](https://arxiv.org/abs/2502.02183)
- **著者:** Junyan Cao, Mihai Păun
- **初回投稿日:** 2025年2月4日
- **最終更新日:** 2025年2月24日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

正則全射$p:X\to Y$に対する相対標準束$K_{X/Y}$の正値性は、射影的な場合にはBergman核を使って調べられるが、一般のコンパクトKähler多様体では局所的に作った計量を貼り合わせることが難しい。本論文は追加の有理性仮定のもとでこの障害を回避する。

第二の柱は、局所閉部分多様体のZariski閉包と余法束の擬有効性を結ぶOuの代数性判定である。解析的な電流とLelong数の比較を用いることで、葉層が有理型写像から誘導されるための判定を得る。

第三に、これらを接束の商層へ適用する。標準束が擬有効なコンパクトKähler多様体では一定の商層の行列式も擬有効となり、正の最小傾きをもつ葉層の葉が代数的かつ有理連結になる。

## 背景と問題設定

Cao–Höringの予想は、半正曲率をもつ特異Hermite計量付き線束$L$について、一般ファイバー上で$(K_X+L)|_{X_y}$が擬有効なら$K_{X/Y}+L$も擬有効になると予想する。Kähler設定では射影的場合のような大域的構成が直接使えず、局所計量の重なりでの一致が核心的問題となる。

## 主結果

### 相対標準束の擬有効性（Theorem 1.2）

予想1.1の設定に加え、Kähler計量$\omega$と正則2形式$\sigma$が存在し、$\omega+\sigma+\overline\sigma$が有理類で、$\sigma$の一般ファイバーへの制限が消えると仮定する。このとき分岐因子$D(p)$を補正した

$$
K_{X/Y}+L-D(p)
$$

は擬有効である。

### 代数性判定（Theorem 1.3）

コンパクト部分多様体$C$の稠密開集合$C_0$を含む既約局所閉部分多様体$S_0$をとり、そのZariski閉包を$M$とする。$\dim M>\dim S_0$なら余法束$N^*_{C_0/S_0}$は解析的意味で擬有効である。したがって、葉層$\mathcal F\subset T_X$で$\mathcal F^*$が擬有効でなければ、$\mathcal F$は有理型写像から誘導される。

### 商層と葉層への応用（Theorem 1.4, Corollary 1.5）

$K_X$が擬有効で、ある$m\geq1$について$(T_X^*)^{\otimes m}\twoheadrightarrow Q$となる捩れのない層$Q$があれば、$\det Q$は擬有効である。また可動類$\alpha$に対して$\mu_{\alpha,\min}(\mathcal F)>0$なら、葉層$\mathcal F$は代数的で一般葉は有理連結となる。

## 証明の見取り図

相対標準束については、一般点の近傍でBergman核とその$L^{2/k}$版から正曲率計量を作り、重なりで一致させた後に解析集合を越えて延長する。代数性判定ではDemaillyのmass concentrationとCollins–Tosattiの延長定理により大きなLelong数をもつ準psh関数を作る。点での大きなLelong数を$C_0$に沿うgeneric Lelong数へ伝播させ、余法束の非擬有効性との矛盾からZariski閉包の次元を制御する。

## 原論文との対応

- **Abstractページ:** [arXiv:2502.02183](https://arxiv.org/abs/2502.02183)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.2, Theorem 1.3, Theorem 1.4, Corollary 1.5
- **確認したarXivバージョン:** v2
- **確認したライセンス:** Creative Commons Attribution 4.0 International
- **source_scope:** Abstract and Introduction
