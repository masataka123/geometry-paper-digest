---
layout: paper
title: "On the extension of Kähler currents on compact complex manifolds"
title_ja: "コンパクト複素多様体上の Kähler current の延長について"
authors: "Jiafu Ning, Kai Pang, Haoyuan Sun, Zhiwei Wang, Xiangyu Zhou"
topic: complex-geometry
arxiv_id: "2608.01330v1"
arxiv_url: "https://arxiv.org/abs/2608.01330"
arxiv_submitted: "2026-08-02"
arxiv_updated: "2026-08-02"
arxiv_categories: "math.CV"
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

- **arXiv:** [arXiv:2608.01330](https://arxiv.org/abs/2608.01330)
- **著者:** Jiafu Ning, Kai Pang, Haoyuan Sun, Zhiwei Wang, Xiangyu Zhou
- **初回投稿日:** 2026年8月2日
- **最終更新日:** 2026年8月2日（v1）
- **主分類・副分類:** Complex Variables (math.CV)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## イントロダクションの日本語要約

コンパクト Kähler 多様体 $(X,\omega)$ の閉複素部分多様体 $V$ 上にある $\omega|_V$-plurisubharmonic（psh）関数は、$X$ 上の $\omega$-psh 関数の制限として得られるだろうか。これは Coman--Guedj--Zeriahi が提示した延長問題であり、current の言葉では、$V$ 上の正値性を ambient space 上へ保って延長できるかを問う。

従来は $\omega$ が Hodge class の場合、実 Néron--Severi class の場合、解析的特異点をもつ strict current の場合などが知られていた。任意の特異点を扱う strict 版も、$V$ の近傍から $V$ への正則 retract が存在する場合には解かれていたが、一般の場合にはこの補助仮定が残っていた。

Theorem 1.1 はこの問題に完全な肯定解を与える。実際には Kähler を越えて、任意のコンパクト Hermitian 多様体 $(X,\omega)$ と閉複素部分多様体 $V$ に対し、全ての $\varphi\in\operatorname{PSH}(V,\omega|_V)$ は $\Phi\in\operatorname{PSH}(X,\omega)$ へ延長できる。

さらに $\omega|_V+dd^c\varphi\geq\varepsilon\omega|_V$ という狭義の下界があれば、ある $\varepsilon'>0$ に対して $\omega+dd^c\Phi\geq\varepsilon'\omega$ となる延長が存在する（Theorem 1.2）。したがって $\omega$ が Kähler なら、$[\omega|_V]$ 内の任意の Kähler current は $[\omega]$ 内の Kähler current の制限になる。

方法上の新しさは、$V$ 上の滑らかな近似を共通の近傍へ一様評価付きで同時に延長することを要求しない点にある。代わりに、延長データの一様性を緩めながら単調性を維持し、極限で所望の特異 psh 関数を回収する。

Introduction 以降の構成の概略では、まず滑らかな strict psh 関数を $V$ の近傍へ延長し、対数極をもつ補助関数を使った dominated global patching によって全空間へ貼り合わせる。次に gap をもつ単調な滑らか近似を組み合わせ、貼り合わせ列の減少極限を取る。

著者らは、この方法が $V$ が非滑らかな解析的部分空間の場合にも応用できる可能性を指摘するが、それは本論文の証明済み範囲ではなく後続研究の課題である。

## 論文の主要ポイント

- 任意の $\omega|_V$-psh 関数が ambient の $\omega$-psh 関数へ延長する（Theorem 1.1）。
- strict positivity も正の定数を取り直して保存できる（Theorem 1.2）。
- Kähler の場合、部分多様体上の Kähler current を ambient Kähler current へ延長できる。
- Hodge class、Néron--Severi class、解析的特異点、近傍 retract といった従来の補助仮定を不要にする。
- gap をもつ単調近似と dominated global patching が新しい技術的要点である。

## 論文の構成

Section 2 で psh 関数と近似を準備し、Section 3 で局所的な滑らかな延長、Section 4 で大域的貼り合わせ補題、Section 5 で gap をもつ単調近似を示し、Section 6 で主定理を証明する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.01330](https://arxiv.org/abs/2608.01330)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.2, Remark 1.1
- **論文構成の説明:** Contents, p. 1 および Introduction, p. 2（方法の概略）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
