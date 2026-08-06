---
layout: paper
title: "A klt generalized pair with infinitely generated canonical ring"
title_ja: "有限生成でない標準環をもつ klt generalized pair"
authors: "Jihao Liu, Yanze Wang"
topic: algebraic-geometry
arxiv_id: "2608.03258v1"
arxiv_url: "https://arxiv.org/abs/2608.03258"
arxiv_submitted: "2026-08-04"
arxiv_updated: "2026-08-04"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
summary: >-
  通常の klt pair に対する標準環の有限生成が generalized pair にも成り立つかという問題に、反例を与える論文である。著者らは滑らかな射影多様体上で nef な generalized canonical class をもちながら、その環が有限生成でない 19 次元の例を構成する。
abstract_en: ""
summary_en: >-
  The paper gives a negative answer to the finite-generation question for generalized log canonical rings of projective klt generalized pairs. Its example is built on a smooth projective bundle over a four-dimensional abelian variety, with the nef part descending to the bundle itself. The resulting generalized canonical class is nef but non-abundant, and its section ring is identified with a non-finitely-generated invariant ring. The construction also yields a smooth variety with nef anticanonical divisor whose anticanonical ring is not finitely generated.
abstract_ja: >-
  複素数体上の射影 klt generalized pair で、generalized log canonical ring が有限生成でない例を構成する。例では基礎多様体は滑らかで境界因子はゼロ、nef part はその基礎多様体上に降下する。generalized canonical class は nef だが big でも abundant でもなく、その切断環は有限生成でない。著者らは主結果の着想に生成 AI を利用し、その後に人間が検証と調整を行ったと明記している。
abstract_source_url: "https://arxiv.org/abs/2608.03258"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.03258](https://arxiv.org/abs/2608.03258)
- **著者:** Jihao Liu, Yanze Wang
- **初回投稿日:** 2026年8月4日
- **最終更新日:** 2026年8月4日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## イントロダクションの日本語要約

BCHM の有限生成定理により、複素数体上の射影 klt pair $(X,B)$ の log canonical ring は有限生成である。Birkar--Zhang が導入した generalized pair は、通常の境界に補助的な nef part $M$ を加えてこの枠組みを拡張し、現代の双有理幾何で重要な道具となっている。本論文は、対応する generalized log canonical ring の有限生成がこの広い設定でも保たれるかを問う。

反例がありそうだという見通しだけでは、構成は容易でなかったと Introduction は説明する。たとえば non-vanishing が失敗する既知例では環が自明になり、かえって有限生成である。また、big かつ nef な generalized canonical class は klt の場合には semi-ample になり、小さい Kodaira 次元をもつ因子の環にも有限生成が自動的に生じる。このため、求める反例は高次元で、既知の正値性の仕組みを慎重に避ける必要がある。

主結果 Theorem 1.1 は、滑らかな射影多様体 $X$、境界 $B=0$、$X$ 上に降下する nef part $M$ からなる generalized klt pair を構成する。$X$ 上には nef Cartier 因子 $\xi$ があり、$K_X\sim-16\xi$ および $M_X\sim17\xi$ となるため、generalized canonical class は $\xi$ に線形同値である。しかし、その切断環 $R(X,\xi)$ は有限生成でない。

同じ例では $\kappa(X,\xi)=11$ に対して数値次元は $\nu(X,\xi)=15$ であり、$\xi$ は nef だが big でも abundant でもない。さらに $-K_X$ も nef で、その反標準環も有限生成でない。Introduction は、big の場合や低次元、あるいは nef part が Lelong 数ゼロの半正値特異 Hermitian 計量をもつ場合に知られていた肯定的結果との境界を、この例が示すと述べる。

構成の核は、Hilbert の第 14 問題に由来する Totaro の表現と、abelian variety の universal vector extension がもつ anti-affine 性質を組み合わせることである。4 次元 abelian variety $A$ の universal vector extension を加法群 $U=(\mathbb{G}_a)^4$ の torsor とみなし、有限生成でない不変式環をもつ 16 次元表現から階数 16 のベクトル束 $E$ を作る。anti-affine 性と降下により、$E$ の対称冪の大域切断環が Totaro の不変式環に同定される。

そこで $X=\mathbb{P}_A(E)$ とし、tautological class を $\xi$ とする。$E$ は自明線束の反復拡大で行列式が自明となるため、射影束の標準因子公式から $K_X\sim-16\xi$ が得られる。$M=17\xi$ と選ぶと generalized canonical class が $\xi$ になり、その環の非有限生成が不変式環から従う、というのが Introduction に示された着想である。

既知の低次元有限生成定理から、この型の例は少なくとも 4 次元でなければならない一方、本論文の $X$ は 19 次元である。したがって最小次元の決定は未解決問題として残される。また Introduction は、主結果が複数の生成 AI システムによって得られ、人間による確認と文章の調整が後から行われたこと、関連文献を見落としている可能性があることを著者自身の限定として明記している。本記事も主張の独立検証ではなく、v1 の Abstract と Introduction における著者らの説明を要約したものである。

## 論文の主要ポイント

- 滑らかな $X$ と $B=0$ をもつ射影 klt generalized pair で、generalized log canonical ring が有限生成でない例を構成する（Theorem 1.1）。
- 例の generalized canonical class $\xi$ は nef だが、$\kappa(X,\xi)=11<15=\nu(X,\xi)$ であり abundant ではない。
- $-K_X$ も nef である一方、反標準環 $R(X,-K_X)$ は有限生成でないと主張される。
- Totaro の非有限生成不変式環を、abelian variety の anti-affine universal vector extension から作るベクトル束の切断環として実現する。
- Introduction では、構成される 19 次元の例に対し、可能な最小次元の決定が今後の問題として挙げられる。

## 論文の構成

Introduction の後、Section 2 で generalized pair、射影束、Totaro の表現、anti-affine 群を準備する。Section 3 で associated bundle と切断環を不変式環へ同定する降下補題を扱い、その後の節で主構成と数値的性質を確立する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.03258](https://arxiv.org/abs/2608.03258)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Remarks 1.2–1.5
- **論文構成の説明:** Introduction, pp. 2–3（構成の概略）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
