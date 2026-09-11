---
layout: paper
title: "Analytic Construction of Rational Curves on Fano Manifolds"
title_ja: "Fano多様体上の有理曲線の解析的構成"
authors: "Yun-Heng Du, Bin Guo, Song-Yan Xie"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
arxiv_abstract: >-
  Inspired by methods for constructing entire curves in Oka geometry, we give an analytic construction of rational curves on a complex Fano manifold $X$. Yau's theorem provides a Kähler metric with positive Ricci curvature. Using this curvature to guide deformations of holomorphic discs, we construct maps from discs of radii tending to infinity with uniformly bounded area. A central point is to preserve the derivative normalization through the limiting process. This yields a nonconstant entire map $f:\mathbb C\rightarrow X$ of finite area. This map extends across infinity to a nonconstant holomorphic map $\mathbb P^1\to X$. Combined with algebraic arguments in characteristic zero, the construction yields proofs of the rational connectedness of Fano manifolds and of Hartshorne's conjecture on ample tangent bundles.
topic: several-complex-variables
tags:
  - fano-varieties
  - curvature
  - oka-theory
arxiv_id: "2609.11612v1"
arxiv_url: "https://arxiv.org/abs/2609.11612"
arxiv_submitted: "2026-09-10"
arxiv_updated: "2026-09-10"
summary: >-
  正Ricci曲率を持つコンパクトKähler多様体上で、面積を一様に抑えた正則円板を拡大し、有限面積整関数から有理曲線を解析的に構成する。各点を通る曲線の鋭い面積上界を与え、この構成を用いてFano多様体の有理連結性とHartshorne予想の標数0における証明を導く。
abstract_en: ""
summary_en: >-
  The paper develops a curvature-driven analytic construction of rational curves on complex Fano manifolds. Holomorphic disks are deformed while their areas stay uniformly controlled, producing a nonconstant finite-area entire curve that extends to a sphere. A relative version yields a sharp area bound for a sphere escaping a compact fiber. Algebraic arguments then turn this construction into proofs of rational connectedness for Fano manifolds and the characterization of projective space by an ample tangent bundle.
abstract_ja: >-
  Oka幾何における整曲線構成を手掛かりとして、複素Fano多様体上の有理曲線を解析的に構成する。Yauの定理で得られる正Ricci曲率Kähler計量を用い、半径が無限大へ向かう正則円板を面積一様有界のまま変形する。極限で微分の正規化を保つことにより非定数かつ有限面積の整写像を得て、無限遠点を越えて $\mathbb P^1$ からの正則写像へ延長する。標数0の代数幾何的議論と組み合わせると、Fano多様体の有理連結性と豊富な接束に関するHartshorne予想が従う。
abstract_source_url: "https://arxiv.org/abs/2609.11612"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.11612](https://arxiv.org/abs/2609.11612)
- **著者:** Yun-Heng Du, Bin Guo, Song-Yan Xie
- **初回投稿日:** 2026年9月10日
- **最終更新日:** 2026年9月10日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体上の有理曲線は古典的には正標数への還元とbend-and-breakで構成される。一方、すべてのFano多様体には正Ricci曲率のKähler計量が存在するため、この曲率から直接曲線を作るというYau以来の解析的問題が残っていた。

本論文は、正則円板を広げながら面積を一様に制御する方法を構築する。有限面積の非定数整写像 $\mathbb C\to X$ を極限として得て、除去可能特異点定理により $\mathbb P^1\to X$ へ延長する。

中心点や底方向の微分を極限で失わないため、主定理は相対的な形で定式化される。正Ricci曲率下で、指定したコンパクトファイバーと交わるがその中に含まれない球面を、明示的かつ鋭い面積上界とともに構成する。

この相対的球面定理を有理商へ適用するとFano多様体の有理連結性が得られる。また接束が豊富なら得られた曲線をMoriの最小曲線族の議論へ入力し、多様体が射影空間であることを示す。

## 背景と問題設定

$X$ を複素次元 $n$ のコンパクトKähler多様体とし、$\operatorname{Ric}(\omega)\geq\kappa\omega$、$\kappa>0$ を仮定する。Fano多様体ではYauの処方Ricci曲率定理によりこの条件を満たす計量を選べるが、正則近似だけでは拡大する円板の面積上界は得られない。

論文は有限面積を球面への延長の鍵とし、同時にbubblingや境界への面積集中によって指定点・微分条件が別成分へ逃げる問題を処理する。

## 主結果

### 相対的球面定理（Theorem 1.1）

$q:N\to Y$ を正次元複素多様体への正則写像とし、$F=q^{-1}(y_0)$ が空でないコンパクト集合で、その近傍で $q$ が劣浸没であるとする。このとき非定数正則写像 $u:\mathbb P^1\to X$ が存在して

$$
u(\mathbb P^1)\cap F\neq\varnothing,\qquad
u(\mathbb P^1)\not\subset F,
$$

かつ

$$
\int_{\mathbb P^1}u^*\omega\leq \frac{2\pi(n+1)}{\kappa}
$$

を満たす。Kähler--Einstein計量は仮定せず、係数 $2\pi(n+1)$ は普遍的上界として鋭い。

### 各点を通る有理曲線（Theorem 1.2）

任意の $x\in X$ を通る非定数正則球面 $u_x$ が存在し、同じ面積上界を満たす。これはMoriの反標準次数上界に対応する解析的構成である。

### 古典定理への応用（Theorems 1.3 and 1.4）

正次元複素Fano多様体は有理連結である。また連結滑らかな複素射影多様体 $X$ について $T_X$ が豊富なら $X\simeq\mathbb P^n$ である。前者では相対的球面が有理商の一般ファイバーから脱出することが決定的であり、後者では得られた曲線を最小曲線族の分類へ用いる。

## 証明の見取り図

半径 $R$ の円板上で中心と一つの微分を固定した変分を考える。補間条件のDirichletコストとRicci曲率項を比較すると、第二変分のtraceは

$$
4\pi(n+1)-2\int_{D_R}f^*\operatorname{Ric}(\omega)
$$

で抑えられ、面積の閾値 $2\pi(n+1)/\kappa$ が現れる。負の無限小変分を一様な正則変形へ実現し、ほぼ最小な円板とコンパクト性を組み合わせて半径を無限大へ延ばす。

相対版では中心をコンパクトファイバー内で動かし、底方向の微分を正規化する。これにより極限の主成分がファイバー外へ出る情報を保持する。有限面積の整曲線を球面へ延長した後、有理商と曲線の平滑化という標数0の代数幾何を用いて応用を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.11612](https://arxiv.org/abs/2609.11612)
- **Introduction:** Section 1, pp. 1--6
- **Introduction中で言及された主要定理番号:** Theorems 1.1--1.4
- **論文構成の説明:** ContentsおよびSection 1.3, pp. 1, 4--6
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
