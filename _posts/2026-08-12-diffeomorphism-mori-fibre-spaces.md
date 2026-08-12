---
layout: paper
title: "Diffeomorphism types of simply connected $3$-dimensional Mori fibre spaces"
title_ja: "単連結3次元Moriファイバー空間の微分同相型"
authors: "Feng Hao, Yang Su, Jianqiang Yang"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.AT
  - math.GT
topic: algebraic-geometry
arxiv_id: "2604.23180v1"
arxiv_url: "https://arxiv.org/abs/2604.23180"
arxiv_submitted: "2026-04-25"
arxiv_updated: "2026-04-25"
summary: >-
  単連結でホモロジーにtorsionを持たない滑らかな3次元Moriファイバー空間の向き付き微分同相型を、有限個の数値不変量で分類する。基底次元ごとにEuler標数、標準類の三乗、判別曲線などの条件を与え、一般には微分同相型が無限個ある状況を実用的な判定へ還元する。
abstract_en: ""
summary_en: >-
  The paper gives a numerical classification of oriented diffeomorphism types for smooth three-dimensional Mori fibre spaces that are simply connected and have torsion-free homology. The required invariants depend on the dimension of the base and include Euler characteristics, canonical cubic numbers, and data from discriminant curves. The result accommodates infinitely many diffeomorphism types while reducing comparison to finitely many computable quantities. Its proof combines the Wall–Jupp classification of six-manifolds with geometric restrictions imposed by Mori fibre structures.
abstract_ja: >-
  単連結でホモロジー群にtorsionを持たない滑らかな3次元Moriファイバー空間について、その微分同相型を有限個の数値不変量で分類する。用いる量には位相的・正則Euler標数、標準類と相対標準類の三乗、Betti数、判別曲線のデータが含まれる。Fano三次元多様体とは異なり対象には無限個の微分同相型があるが、二つの空間の比較を有限の数値判定へ落とせる。
abstract_source_url: "https://arxiv.org/abs/2604.23180"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.23180v1](https://arxiv.org/abs/2604.23180v1)
- **著者:** Feng Hao, Yang Su, Jianqiang Yang
- **初回投稿日・最終更新日:** 2026年4月25日（v1）
- **主分類・副分類:** math.AG（主分類）、math.AT、math.GT
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Moriファイバー空間（MFS）は極小モデルプログラムの基本的な出力である。本論文は滑らかな複素三次元MFS $f:X\to Y$のうち、$X$が単連結で整数ホモロジーにtorsionを持たないものについて、向き付き微分同相型を分類する。

同じ仮定のFano三次元多様体には有限個の変形型しかないが、MFS全体には無限個の微分同相型がある。それでも、位相的Euler標数$e(X)$、正則Euler標数$\chi(\mathcal O_X)$、$K_X^3$など、有限個の代数幾何的・位相的数値を比較すれば微分同相を判定できることが主眼である。

分類は基底の次元$0,1,2$で大きく分かれる。基底が点なら次数とEuler標数、曲線なら一般ファイバーのdel Pezzo型を検出する不変量と相対標準類の三乗、曲面ならconic bundleの判別曲線やStiefel–Whitney類を含むデータが現れる。

単連結性とtorsion-free仮定は単なる技術条件ではない。これらを外すと基本群や第三コホモロジーのtorsion部分を有限個の数値不変量で分類することさえできないとIntroductionは説明する。

## 背景と問題設定

単連結6次元多様体でホモロジーがtorsion-freeの場合、Wall–Jupp分類はコホモロジー環、$w_2$、$p_1$などで向き付き微分同相型を記述する。しかし一般の三次形式を明示分類することは困難である。MFSの特殊な幾何が三次形式を制約するため、必要データを有限個の数値へ具体化できる。

$f:X\to Y$が滑らかな三次元MFSなら$\dim Y\leq2$である。$\dim Y=0$ではPicard数1のFano多様体、$\dim Y=1$ではdel Pezzo曲面ファイブレーション、$\dim Y=2$ではconic bundleとなり、この構造定理が場合分けを支える。

## 主結果

### 数値的微分同相分類（Theorem 1.1）

$f:X\to Y$と$f':X'\to Y'$を、単連結かつtorsion-free homologyを持つ滑らかな三次元MFSとする。Introductionの長い主定理は次のように基底次元別の判定を与える。

- $\dim Y=\dim Y'=0$なら、$X$と$X'$が向き付き微分同相であることは、次数と$e(X)$が一致することと同値である。
- $\dim Y=\dim Y'=1$では、
  $$
  \mathcal K(X,Y)=\frac{d(X,Y)(K_{X/Y}^3-K_X^3)}6\in\{1,2,\ldots,6,8,9\}
  $$
  が一般ファイバーの微分同相型を検出する。$\mathcal K=8$では$K_X^3$、$1\leq\mathcal K\leq5$では$e(X)$と$K_{X/Y}^3$の符号付き一致が判定条件となり、$\mathcal K=6$ではさらにdivisibility $d(X,Y)$と補正項を含む条件になる。
- $\dim Y=\dim Y'=2$では、滑らかなconic bundleと特異ファイバーを持つものは微分同相でない。両方が滑らかなら$w_2$-type、$e(X)$、$\chi(\mathcal O_X)$、$K_X^3$が判定する。判別曲線が非空なら、これらに$b_3$と判別曲線類のdivisibility、type、normを加えた条件が必要で、低い例外範囲を除けば十分でもある。

基底次元が異なる場合は原則として微分同相でなく、$\mathbb P^2\times\mathbb P^1$および特定のBetti数$b_2=2,b_3=40$を持つFano三次元多様体に例外がある。

### 数値不等式と等号条件

曲面基底で判別曲線を持つ場合を含む分類の一部として、Introductionは

$$
e(X)+b_3(X)\geq6\chi(\mathcal O_X)
$$

を与える。等号は$b_2(X)=2$、すなわち$Y=\mathbb P^2$で$f$が滑らかな場合に限る。また$b_2(X)$が偶数、または$e(X)+b_3(X)\geq12\chi(\mathcal O_X)$なら、分類に現れる符号反転型の代替条件は起こらない。

### 接束・余接束の射影化への系（Corollary 1）

単連結滑らかな射影曲面$S_1,S_2$がhomotopy equivalentなら、それらの接束または余接束の射影化は互いに微分同相となる。これは、homotopy equivalentだが微分同相でない曲面から出発しても、対応する三次元射影束が同じ微分同相型になりうることを示す。

## 証明の見取り図

Wall–Juppの6次元多様体分類に必要な$(H^*(X,\mathbb Z),p_1(X),w_2(X))$と三次形式を、MFSの幾何から計算する。基底が曲面なら滑らかな$\mathbb P^1$束と判別曲線を持つconic bundleを分け、基底が曲線なら一般del Pezzoファイバーを$\mathcal K(X,Y)$で識別する。最後に得られた特性類と三次形式を代数的に比較し、有限個の数値条件へ整理する。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.23180v1](https://arxiv.org/abs/2604.23180v1)
- **Introduction:** Section 1, pp. 1–7
- **Introduction中の主要結果:** Theorem 1.1, Corollary 1
- **論文構成:** Sections 3–4で基底次元2・1を分類、Section 5に補助結果
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
