---
layout: paper
title: "On the extension of Kähler currents on compact complex manifolds"
title_ja: "コンパクト複素多様体上の Kähler current の延長について"
authors: "Jiafu Ning, Kai Pang, Haoyuan Sun, Zhiwei Wang, Xiangyu Zhou"
topic: several-complex-variables
tags:
  - pluripotential-theory
arxiv_id: "2608.01330v1"
arxiv_url: "https://arxiv.org/abs/2608.01330"
arxiv_submitted: "2026-08-02"
arxiv_updated: "2026-08-02"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
summary: >-
  コンパクト Hermitian 多様体の閉複素部分多様体上の任意の $\omega|_V$-plurisubharmonic 関数が、全空間の $\omega$-plurisubharmonic 関数へ延長できることを証明する。狭義版も成り立つため、Kähler 類の current は同じ ambient class の Kähler current の制限として実現される。
abstract_en: ""
summary_en: >-
  This paper resolves an extension problem for quasi-plurisubharmonic potentials on a compact Hermitian manifold. Every potential on a closed complex submanifold that is plurisubharmonic relative to the restricted Hermitian form extends globally with the same relative positivity. A strict version preserves a positive lower bound, and hence extends Kähler currents in the restricted class to Kähler currents in the ambient class. The construction replaces previously required algebraic or retraction hypotheses with a monotone approximation and a dominated global patching method.
abstract_ja: >-
  コンパクト Hermitian 多様体 $(X,\omega)$ と閉複素部分多様体 $V$ に対し、$V$ 上の任意の $\omega|_V$-plurisubharmonic 関数が $X$ 上の $\omega$-plurisubharmonic 関数へ延長することを示す。さらに狭義 plurisubharmonic 性も正の下界を弱めて保存できる。特に Kähler の場合、$V$ 上の $[\omega|_V]$ に属する全ての Kähler current が $X$ 上の $[\omega]$ に属する Kähler current の制限となる。
abstract_source_url: "https://arxiv.org/abs/2608.01330"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.01330v1](https://arxiv.org/abs/2608.01330)
- **著者:** Jiafu Ning, Kai Pang, Haoyuan Sun, Zhiwei Wang, Xiangyu Zhou
- **初回投稿日:** 2026年8月2日
- **最終更新日:** 2026年8月2日（v1）
- **主分類・副分類:** Complex Variables (math.CV)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

本論文は、コンパクト複素多様体の閉複素部分多様体上にある plurisubharmonic potential を、正値性を保ちながら全空間へ延長できるかという Coman--Guedj--Zeriahi の問題を扱う。current の言葉では、部分多様体上の Kähler current を ambient Kähler 類の current の制限として実現できるかという問題である。

従来、Hodge class、実 Néron--Severi class、解析的特異点をもつ strict current などの場合が知られていた。任意の特異点を許す strict 版も、部分多様体の近傍からの正則 retraction が存在する場合には解かれていたが、一般の場合にはこの補助仮定が障害として残っていた。

著者らは問題を完全な一般性で肯定的に解決し、実際には ambient space を Kähler から compact Hermitian へ広げる。全ての $\omega|_V$-psh 関数は $X$ 上の $\omega$-psh 関数に延長でき、strict positivity があれば定数を取り直した strict positivity も保存できる。

新しい点は、部分多様体上の滑らかな近似を共通近傍へ一様評価付きで同時に延長することを要求しないことである。延長データの一様性を緩めながら単調性を保つ方法により、retraction などの従来仮定を除く。非滑らかな部分空間への拡張可能性は将来研究として挙げられ、今回の証明済み範囲には含まれない。

## 背景と問題設定

$(X,\omega)$ を compact Hermitian manifold、$V\subsetneq X$ を閉複素部分多様体とし、$\omega_V=\omega|_V$ と置く。qpsh 関数の集合を $\operatorname{QPSH}(X)$ とし、Introduction の定義に従って

$$
\operatorname{PSH}(X,\omega)
=
\{u\in\operatorname{QPSH}(X):\omega+dd^cu\geq0\}
$$

および

$$
\operatorname{PSH}(X,\omega,\delta)
=
\{u\in\operatorname{QPSH}(X):\omega+dd^cu\geq\delta\omega\}
$$

とする。問題は制限写像が

$$
\operatorname{PSH}(V,\omega_V)
=
\operatorname{PSH}(X,\omega)|_V
$$

を満たすか、さらに strict positivity を保てるかである。

## 主結果

### 任意の特異性をもつ psh potential の延長（Theorem 1.1）

全ての $\varphi\in\operatorname{PSH}(V,\omega_V)$ に対して、

$$
\Phi\in\operatorname{PSH}(X,\omega),
\qquad
\Phi|_V=\varphi
$$

を満たす延長が存在する。したがって

$$
\operatorname{PSH}(X,\omega)|_V
=
\operatorname{PSH}(V,\omega_V)
$$

である。$X$ が Kähler であることを必要とせず、compact Hermitian で十分であり、特異性にも追加条件を課さない点が従来結果からの前進である。

### strict positivity と Kähler current の延長（Theorem 1.2）

ある $\varepsilon>0$ に対して $\varphi\in\operatorname{PSH}(V,\omega_V,\varepsilon)$ なら、ある $\varepsilon'>0$ と

$$
\Phi\in\operatorname{PSH}(X,\omega,\varepsilon'),
\qquad
\Phi|_V=\varphi
$$

が存在する。特に $\omega$ が Kähler metric なら、$[\omega_V]$ に属する全ての Kähler current は、$[\omega]$ に属する Kähler current の制限となる。

Theorem 1.1 と Theorem 1.2 はどちらも compact Kähler を仮定せず compact Hermitian で成立する。一方、Introduction が示唆する非滑らかな $V$ への応用は後続研究の課題であり、この定理の結論ではない。

## 証明の見取り図

Introduction が明示する方法上の要点は、先行研究の戦略を踏まえつつ、$V$ 上の滑らかな近似 $\varphi_j$ を共通近傍へ一様評価付きで同時に延長する要求を捨てることである。代わりに延長データの一様性を緩め、単調性を保存して極限を制御する。

Contents によれば、Section 3 の局所的な滑らかな延長、Section 4 の dominated global patching、Section 5 の gap をもつ strict monotone smooth approximation を準備し、Section 6 で主定理を証明する。Introduction はこれ以上の技術的流れを詳述していないため、ここでは各段階の名称と新しい単調性の方針に限定する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.01330v1](https://arxiv.org/abs/2608.01330v1)
- **Introduction:** Section 1, pp. 1--2
- **問題:** Problem 1.1
- **主要定理:** Theorem 1.1, Theorem 1.2
- **補足:** Remark 1.1
- **論文構成:** Contents, p. 1
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0
- **source_scope:** Abstract and Introduction
