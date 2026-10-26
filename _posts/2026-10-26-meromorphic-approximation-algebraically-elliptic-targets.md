---
layout: paper
title: Meromorphic approximation of holomorphic maps into algebraically elliptic projective varieties
title_ja: 代数的楕円射影多様体への正則写像の有理型近似
authors: Yuta Kusakabe, Taichi Miyazaki
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: We show that holomorphic maps from a neighborhood of a compact set in a Stein space to an algebraically elliptic smooth projective variety can be approximated by meromorphic maps, provided that the map extends continuously to the whole space and the compact set is convex with respect to a submonoid of the Picard group. The proof uses algebraic sprays and their polynomial lifts to affine cones, which we call conic lifts. Rational sprays, which generalize algebraic sprays, extend the result to maps avoiding the exceptional set of a rational spray. We also show that, for smooth projective varieties, the existence of an algebraic spray which is dominating at some point is a birational invariant.
topic: several-complex-variables
tags:
- oka-theory
- stein-geometry
- birational-geometry
arxiv_id: 2610.32384v1
arxiv_url: https://arxiv.org/abs/2610.32384
arxiv_submitted: '2026-10-23'
arxiv_updated: '2026-10-23'
summary: Stein空間のコンパクト集合の近傍から代数的楕円な滑らかな射影多様体への正則写像を、大域的な有理型写像で近似する定理を示す。Picard群の部分モノイドに関する凸性と連続延長を仮定し、パラメータと補間を含めたOka型の近似を得る。
abstract_en: ''
summary_en: Allowing meromorphic approximants makes it possible to work on compact sets beyond the usual holomorphically convex setting. The paper develops approximation and interpolation for maps from Stein spaces into algebraically elliptic projective targets. A homotopy criterion characterizes when approximation is possible, and rational sprays extend the framework away from their exceptional loci. It also proves birational invariance of rational ellipticity.
abstract_ja: Stein空間上のPicard群の部分モノイドに関して凸なコンパクト集合を考え、その近傍の正則写像を大域的な有理型写像で近似する。標的が代数的楕円な滑らかな射影多様体なら、連続延長を起点としてパラメータ付き近似と補間を実現する。証明では代数的sprayをアフィン錐へ持ち上げるconic liftを使う。有理sprayの場合にも例外集合を避けるホモトピーに基づく定理を与え、滑らかな射影多様体上で一点において支配的な代数的sprayを持つことが双有理不変であると示す。
abstract_source_url: https://arxiv.org/abs/2610.32384
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.32384v1](https://arxiv.org/abs/2610.32384)
- **著者:** Yuta Kusakabe, Taichi Miyazaki
- **初回投稿日:** 2026-10-23
- **最終更新日:** 2026-10-23
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka原理の近似定理は通常、正則凸なコンパクト集合上で正則写像を近似する。本論文は近似する写像に有理型の特異性を許すことで、より広い凸性条件の下で同様の柔軟性を得ることを目指す。標的は代数的楕円な滑らかな射影多様体である。

Stein空間のPicard群の部分モノイドに関する凸性を仮定し、近傍で正則な写像が全空間に連続延長されるなら、パラメータと補間を保った大域的有理型近似を構成する。極や不定点を制御するために、コンパクト集合と交わらない切断の零集合を取り除いてホモトピーを行う。

さらに、大域的有理型写像に近づけられることをホモトピー条件で特徴づけ、有理sprayの例外集合を避ける場合へ拡張する。代数的なsprayの錐への持ち上げと、線束の切断の近似が、解析的Oka理論と代数的な標的の構造を結びつける。

## 背景と問題設定

Stein空間 $X$、部分モノイド $G\subset\operatorname{Pic}(X)$、コンパクトな $G$-凸集合 $K\subset X$ を考える。ここで凸性は、$G$ に属する線束の大域切断の零集合によって $K$ の外の点を分離するという種類の条件である。正則凸性だけを要求する設定より広い近似問題を扱える。

代数的sprayは代数的ベクトル束 $E\to Y$ 上の射 $s:E\to Y$ で、零切断上で恒等写像となるものである。各点でファイバー方向の微分が $T\_yY$ に全射なら支配的であり、そのようなsprayを持つ $Y$ を代数的楕円という。有理sprayでは $s$ を有理写像まで許し、不定または非支配的となる零切断上の点の集合を $Z(s)$ とする。

## 主結果

### 連続延長からの近似と補間（Theorem 1.1）

$Y\subset\mathbb P^N$ を代数的楕円な滑らかな射影多様体、$X\_0\subset X$ を閉解析的部分空間、$(P,P\_0)$ を有限CW対とする。連続写像 $f\_0:P\times X\to Y$ が $K$ の近傍で正則写像族であり、$P\_0$ 上では全 $X$ で、全パラメータについては $X\_0$ 上で正則と仮定する。

このとき $K$ と交わらない零集合を持つ切断 $\sigma\in\Gamma(X,L)$、$L\in G$ を選び、任意の $\epsilon>0$ に対して有理型写像族 $F:P\times X\dashrightarrow Y$ を得る。$X\setminus\lbrace \sigma=0\rbrace $ 上では $f\_0$ と $F$ を結ぶホモトピー $f\_t$ があり、

$$
\sup\_{P\times K}\operatorname{dist}(f\_t,f\_0)<\epsilon
$$

を満たす。$P\_0$ 上と $X\_0\setminus\lbrace \sigma=0\rbrace $ 上では元の写像を固定する。$X$ がStein多様体、$X\_0$ が閉複素部分多様体で、元の族がその近傍で正則なら、任意の指定次数のjet補間も可能である。

### 有理型近似のホモトピー判定（Theorem 1.2）

同じ幾何的設定で、$K$ の近傍の正則写像族 $f\_1$ を考える。パラメータ部分集合での一致と $X\_0$ に沿う所定のjetを保った有理型近似が可能であることは、大域的有理型写像から $f\_1$ に至る局所的な正則ホモトピーが同じ補間条件を満たして存在することと同値である。近傍で写像を表す同次座標の組が同時に零にならないことも条件に含まれる。

結論では近似の過程自体を $f\_1$ に一様に近く保ち、近似写像の線束を、出発点の線束と $G$ に属する線束の冪とのテンソル積として制御する。一方、切断の零集合上で座標の組が合同であることだけから、そこで写像が正則になるとは結論しない。

### 有理sprayの例外集合を避ける場合（Theorem 1.7）

標的 $Y$ が有理sprayを持ち、その例外集合を含む真のZariski閉集合を $Z$ とする。$f\_1$ が $Y\setminus Z$ に値を取り、上のホモトピーも $Z$ を避けるという条件の下で、同様の近似・補間と同値判定が成立する。単に標的が解析的に楕円であるという条件ではTheorem 1.1は一般には成立しないことも明記される。

### 有理楕円性の双有理不変性（Theorem 1.8）

例外集合が全体でない有理sprayを持つという有理楕円性は、滑らかな多様体の双有理不変量であり、

$$
\text{rational}\Longrightarrow\text{rationally elliptic}\Longrightarrow\text{unirational}
$$

が成り立つ。滑らかな射影多様体については、有理楕円性は一点で支配的な代数的sprayの存在に同値である。これはすべての点で支配的なsprayの存在と区別される。

## 証明の見取り図

sprayを次数1のconic liftに正規化し、標的へのホモトピーをアフィン錐上のデータへ持ち上げる。その持ち上げを線束の切断として近似し、sprayへ代入して大域的な有理型写像を得る。Theorem 1.1ではこの手法をOka原理と組み合わせ、連続延長から必要なホモトピーを用意する。例外集合の回避と零集合の管理が、近似・補間の有効範囲を決める。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.32384)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.32384v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.7, 1.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.32384v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
