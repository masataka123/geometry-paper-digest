---
layout: paper
title: "A klt generalized pair with infinitely generated canonical ring"
title_ja: "有限生成でない標準環をもつ klt generalized pair"
authors: "Jihao Liu, Yanze Wang"
topic: algebraic-geometry
tags:
  - singularities
  - positivity
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

- **arXiv:** [arXiv:2608.03258v1](https://arxiv.org/abs/2608.03258v1)
- **著者:** Jihao Liu, Yanze Wang
- **初回投稿日:** 2026年8月4日
- **最終更新日:** 2026年8月4日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

通常の射影 klt pair では BCHM により log canonical ring は有限生成である。本論文は、nef part $M$ を加えた generalized pair では対応する有限生成が一般には成立しないことを、滑らかな射影多様体上の具体例で示す。

例の generalized canonical class は nef だが big でも abundant でもない。したがって、big and nef の場合の semi-ampleness や小さい Kodaira 次元での既知の有限生成を避ける反例になっている。

構成は 4 次元 abelian variety の universal vector extension と、Hilbert 第14問題に由来する Totaro の有限生成でない不変式環を結びつける。得られる射影束は 19 次元であり、最小の可能次元は未解決である。

Introduction は、主結果の着想に複数の生成 AI システムを利用し、その後に人間が検証と調整を行ったことも明記する。本記事は主張を独立に検証するものではなく、v1 の Abstract と Introduction の記述を整理する。

## 背景と問題設定

generalized pair $(X,B+M)$ は通常の境界 $B$ に補助的な nef part $M$ を加える。既知の non-vanishing の反例では section ring が自明となって有限生成であり、big and nef な generalized canonical class は klt の場合 semiample になる。そのため、非有限生成を得るには中間的な Kodaira 次元と数値次元をもつ nef 非 abundant 因子が必要になる。

## 主結果

### 非有限生成の generalized canonical ring（Theorem 1.1）

滑らかな 19 次元射影多様体 $X$、境界 $B=0$、$X$ 上に降下する nef part $M$ をもつ generalized klt pair が存在し、その generalized log canonical ring は有限生成でない。

より具体的には、$X$ 上の nef Cartier 因子 $\xi$ に対して

$$
K_X\sim -16\xi,\qquad M_X\sim 17\xi,
$$

したがって

$$
K_X+B+M_X\sim \xi
$$

となるが、section ring $R(X,\xi)$ は有限生成でない。また

$$
\kappa(X,\xi)=11<15=\nu(X,\xi)
$$

なので $\xi$ は abundant でない。同じ公式から $-K_X=16\xi$ は nef であり、その anticanonical ring も有限生成でないという帰結を得る。

この結果は generalized pair の有限生成問題への否定的回答である一方、big な場合や Introduction に列挙された追加の正値性仮定のもとでの肯定的結果を否定するものではない。

## 証明の見取り図

4 次元 abelian variety $A$ の universal vector extension を加法群 $U=(\mathbb G_a)^4$ の torsor とみなし、有限生成でない不変式環をもつ Totaro の 16 次元表現から階数 16 のベクトル束 $E$ を作る。universal vector extension の anti-affine 性と降下により、$E$ の対称冪の大域切断環をその不変式環と同定する。

次に

$$
X=\mathbb P_A(E)
$$

とし、tautological class を $\xi$ とする。$E$ は自明線束の反復拡大で $\det E\simeq\mathcal O_A$ だから、射影束の標準因子公式が $K_X\sim-16\xi$ を与える。$M=17\xi$ と選べば generalized canonical class は $\xi$ となり、環の非有限生成は不変式環との同定から従う、という流れが Introduction に示されている。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.03258v1](https://arxiv.org/abs/2608.03258v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Remarks 1.2–1.5
- **論文構成の説明:** Introduction, pp. 2–3（構成の概略）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
