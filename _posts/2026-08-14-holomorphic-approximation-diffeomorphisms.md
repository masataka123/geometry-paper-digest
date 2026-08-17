---
layout: paper
title: "Holomorphic Approximation for Real Diffeomorphism Groups"
title_ja: "実微分同相群の正則近似"
authors: "Fusheng Deng, Gaofeng Huang, Frank Kutzschebauch, Erlend Fornæss Wold"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.DG
arxiv_abstract: >-
  We show that every diffeomorphism of $\mathbb{R}^n$ for $n \ge 2$ can be approximated by an
  automorphism of $\mathbb{C}^n$ in the Whitney $C^k$-topology for any positive integer $k$ using the
  notion of density property. More precisely we find sufficient conditions for this holomorphic
  approximation of diffeomorphisms to hold and prove that the split real forms of most linear
  algebraic groups satisfy these conditions. In the same manner we also show holomorphic
  approximations of volume-preserving diffeomorphisms for the split real forms of linear algebraic
  groups equipped with the left-invariant volume form.
topic: several-complex-variables
tags:
  - oka-theory
arxiv_id: "2608.12565v1"
arxiv_url: "https://arxiv.org/abs/2608.12565"
arxiv_submitted: "2026-08-12"
arxiv_updated: "2026-08-12"
summary: >-
  実多様体の微分同相を、その Stein 複素化の正則自己同型で Whitney 位相において近似する問題を扱う。実構造と両立する density property を十分条件として、$\mathbb R^n$ の全微分同相および体積保存版を任意の $C^k$ 精度で大域的に近似する。
abstract_en: ""
summary_en: >-
  The paper develops a framework for approximating real diffeomorphisms by holomorphic automorphisms of a Stein complexification. Its hypotheses are formulated through density properties compatible with the antiholomorphic involution defining the real locus. In particular, every diffeomorphism of real Euclidean space of dimension at least two admits arbitrarily fine Whitney $C^k$ approximation by an automorphism of complex Euclidean space preserving the real locus. Parallel statements treat volume-preserving and Hamiltonian transformations, with applications to split real forms of many linear algebraic groups.
abstract_ja: >-
  Stein 複素化上の正則自己同型によって実微分同相を近似する一般的枠組みを構築する。反正則対合と両立する density property、volume density property、Hamiltonian density property を十分条件として定式化する。特に $n\ge2$ では $\mathbb R^n$ の任意の微分同相を、実部分を保存する $\mathbb C^n$ の正則自己同型で任意の Whitney $C^k$ 精度まで近似できる。体積保存版や Hamiltonian 版も与え、多くの線形代数群の split real form へ適用する。
abstract_source_url: "https://arxiv.org/abs/2608.12565"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2608.12565](https://arxiv.org/abs/2608.12565)
- **著者:** Fusheng Deng, Gaofeng Huang, Frank Kutzschebauch, Erlend Fornæss Wold
- **初回投稿日・最終更新日:** 2026年8月12日
- **主分類・副分類:** math.CV（主分類）、math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Carleman 近似は実部分上の関数を正則関数で Whitney 位相において近似する。これを写像、特に微分同相へ移すには、近似後も大域的に可逆で実部分を保つことが必要となり、関数近似よりはるかに強い自己同型群が要る。

本論文は Andersén–Lempert 理論の density property を、反正則対合 $\sigma$ と両立する「実正則」ベクトル場へ適合させる。完備な実正則ベクトル場が十分多ければ、その flow を組み合わせて実微分同相の isotopy を正則自己同型で追跡できる。

最も具体的な帰結は、$n\ge2$ の $\mathbb R^n$ の任意の微分同相に対する大域的かつ点ごとに精度を指定できる $C^k$ 近似である。体積保存微分同相では、近似自己同型も標準正則体積形式を保存する。

一般定理は Stein 複素化をもつ多様体へ拡張され、通常・体積・Hamiltonian の三種類の density property を区別する。split real form をもつ多くの線形代数群が仮定を満たすことも Introduction で主要な応用として掲げられる。

## 背景と問題設定

複素化 $(X,\sigma)$ の実部分 $X_{\mathbb R}$ を $\sigma$ の固定点成分として実現する。正則自己同型は $\sigma$ と可換でなければ実部分を保存しないため、通常の density property ではなく、完備な実正則ベクトル場が全実正則ベクトル場を生成する $\sigma$-density property が必要になる。

## 主結果

### Euclid 空間の近似（Theorem 1.1）
$n\ge2$、$\varphi\in\operatorname{Diff}(\mathbb R^n)$、正の連続関数 $\epsilon$、$k\in\mathbb N$ に対し、$\Phi(\mathbb R^n)=\mathbb R^n$ を満たす $\Phi\in\operatorname{Aut}(\mathbb C^n)$ が存在して

$$
\lVert\Phi(x)-\varphi(x)\rVert_{C^k}<\epsilon(x)\qquad(x\in\mathbb R^n)
$$

となる。

### 体積保存版（Theorem 1.3）
$\omega=dx_1\wedge\cdots\wedge dx_n$ と $\Omega=dz_1\wedge\cdots\wedge dz_n$ に対し、$\varphi^*\omega=\omega$ なら、上の $\Phi$ をさらに $\Phi^*\Omega=\Omega$ と選べる。

### Stein 複素化上の一般定理（Theorems 1.9–1.11）
$\sigma$-density property をもつ Stein 複素化では恒等写像に滑らかに isotopic な微分同相が正則近似可能である。volume density property と Hamiltonian density property の下でも、それぞれ体積保存群と Hamiltonian 微分同相群について対応する結論が成り立つ。

## 証明の見取り図

実微分同相の isotopy を時間依存ベクトル場で表し、$\sigma$-density property により、そのベクトル場を完備な実正則ベクトル場の Lie 結合で近似する。各近似を flow の合成へ変換し、$\sigma$ 不変な正則凸 exhaustion 上で誤差を逐次制御する Andersén–Lempert 型帰納法を用いる。体積・Hamiltonian の場合は対応する形式を保存するベクトル場の Lie 代数内で同じ構成を行う。

## 原論文との対応
- **Abstractページ:** [arXiv:2608.12565](https://arxiv.org/abs/2608.12565)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.9, 1.10, 1.11
- **論文構成の説明:** pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
