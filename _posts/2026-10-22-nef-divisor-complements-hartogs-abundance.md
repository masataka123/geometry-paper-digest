---
layout: paper
title: On the complement of nef divisors on projective manifolds
title_ja: nef因子の補集合のHartogs性と豊穣性
authors: S. Feklistov
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: Let $X'$ be a complex projective manifold, $\dim X'>1$, $Z$ a connected analytic subset of codimension one which is the support of a nef effective Cartier divisor $D$ on $X'$, $X:=X'\setminus Z$. Let $\kappa(D)$ be the Iitaka dimension of $D$. We prove that $X$ is not Hartogs if and only if $D$ is abundant and $\kappa(D)=1$. In particular, $X$ is not Hartogs if and only if $X$ is a proper fibration over an affine curve.
topic: algebraic-geometry
tags:
- positivity
- complex-analytic-spaces
arxiv_id: 2505.10730v4
arxiv_url: https://arxiv.org/abs/2505.10730
arxiv_submitted: '2025-05-15'
arxiv_updated: '2026-10-21'
summary: 滑らかな複素射影多様体上の有効nef因子で台が連結な場合、その補集合がHartogs拡張性を失う条件を特徴付ける。非Hartogsとなるのは因子がabundantで飯高次元一の場合に限られ、補集合からアフィン曲線への固有ファイブレーションの存在とも同値になる。
abstract_en: ''
summary_en: The paper asks when deleting a nef effective divisor destroys Hartogs extension on a projective manifold. Its criterion combines the growth of sections with the numerical dimension of the divisor. Failure of extension is exactly the abundant, Iitaka-dimension-one case, and it has a geometric interpretation as a fibration over a curve. The result does not identify the Hartogs property with Steinness, which is a stronger question.
abstract_ja: 次元が一より大きい複素射影多様体から、連結な台をもつ有効nef Cartier因子の台を除いた補集合を考える。補集合がHartogs多様体でないための必要十分条件は、因子の飯高次元と数値次元がともに一となることである。さらにこの条件は、因子の正整数倍が射影曲線へのファイブレーションの一点の正整数倍の引き戻しになることと同値であり、補集合上ではアフィン曲線への固有ファイブレーションとして表される。
abstract_source_url: https://arxiv.org/abs/2505.10730
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2505.10730v4](https://arxiv.org/abs/2505.10730)
- **著者:** S. Feklistov
- **初回投稿日:** 2025-05-15
- **最終更新日:** 2026-10-21
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体から因子を取り除いた空間で、コンパクトな穴を避けて定義された正則関数は穴の内側まで延長できるのか。本論文は、除く因子が有効かつnefで台が連結という条件の下で、このHartogs拡張性の失敗を完全に特徴付ける。

答えは、因子の飯高次元と数値次元がともに一であることである。正則切断の増大が測る代数的な次元と、Chern類の冪が測る数値的な次元が一致するabundantな場合のうち、曲線方向だけが残る状況で延長性が失われる。

同じ現象は幾何学的にも記述できる。補集合が非Hartogsとなることは、アフィン曲線への固有ファイブレーションをもつことと同値である。これは補集合がSteinかどうかという、より強い問題とは区別される。

## 背景と問題設定

非コンパクト連結複素多様体 $X$ がHartogs性をもつとは、$X\setminus K$ が連結となる任意のコンパクト集合 $K\subset X$ について、制限写像

$$
\Gamma(X,\mathcal O\_X)\longrightarrow\Gamma(X\setminus K,\mathcal O\_X)
$$

が同型になることである。Introductionでは因子の近傍構造、法束の平坦性、Ueda理論とこの延長性の関係を背景に置く。

nef因子 $D$ の数値次元は $\nu(D)=\max\lbrace k:c\_1(\mathcal O(D))^k\neq0\rbrace $ である。飯高次元 $\kappa(D)$ は切断数の増大次数を表し、有効nef因子では $\kappa(D)\leq\nu(D)$ となる。両者が等しいときabundantと呼ぶ。数値次元が二以上の場合の既知結果に対し、難しい境界は数値次元一にある。

## 主結果

### Hartogs性の失敗の必要十分条件（Main Theorem）

$X'$ を次元が一より大きい複素射影多様体、$D$ を連結な台 $Z$ をもつ有効nef因子とし、$X=X'\setminus Z$ と置く。このとき

$$
X\text{ が非Hartogs}\quad\Longleftrightarrow\quad
D\text{ がabundantかつ }\kappa(D)=1
\quad\Longleftrightarrow\quad\kappa(D)=\nu(D)=1.
$$

nef性だけで補集合のStein性を結論する定理ではなく、正則関数の延長性についての判定である。また結論を決めるのは補集合、すなわち台 $Z$ であり、同じ連結な台をもつ二つの有効nef因子で「abundantかつ飯高次元一」の成否は一致する。

### 射影曲線へのファイブレーション（第一のCorollary）

同じ仮定の下で、$X$ が非Hartogsであることは、射影曲線 $C'$ へのファイブレーション $f:X'\to C'$、点 $p\in C'$、正整数 $m,k$ が存在して

$$
mD=f^*(kp)
$$

となることと同値である。ここでファイブレーションは連結な正次元ファイバーをもつ全射正則写像という原文の意味で使う。因子の台が一本のファイバーの台として現れることが、延長障害の幾何学的内容となる。

### 補集合からアフィン曲線への固有写像（第二のCorollary）

$Z$ が有効nef因子を支える連結な余次元一の解析的部分集合であるとき、

$$
X'\setminus Z\text{ が非Hartogs}
\quad\Longleftrightarrow\quad
X'\setminus Z\longrightarrow C
\text{ というアフィン曲線への固有ファイブレーションが存在する。}
$$

射影多様体上の因子条件を、開多様体自身の写像の存在で言い換えたものである。

## 証明の見取り図

Introductionによると、abundantで飯高次元一なら非Hartogsになる方向は、曲線へのファイブレーションと、固有正則写像に関するHartogs性の性質を使う標準的な方向である。

逆向きでは、数値次元が一より大きい場合を扱った先行研究と同じ経路を取り、残る $\kappa(D)=0$、$\nu(D)=1$ の場合を調べる。そのため、$Z$ の小近傍 $U$ 上で $(-D)|\_U$ に対応する完全線形系を解析する。滑らかな半正値計量を仮定する既存結果と異なり、nef因子でもそのような計量をもたない場合を排除せずに扱う点が重要である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2505.10730)
- **Introduction:** [PDF](https://arxiv.org/pdf/2505.10730v4) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Main Theorem；Introductionの二つのCorollary（番号なし）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2505.10730v4
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
