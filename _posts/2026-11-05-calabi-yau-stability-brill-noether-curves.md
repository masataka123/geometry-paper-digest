---
layout: paper
title: Stability conditions on Calabi-Yau threefolds via Brill-Noether theory of curves
title_ja: 曲線のBrill–Noether理論によるCalabi–Yau三次元多様体の安定性条件
authors: Soheyla Feyzbakhsh, Naoki Koseki, Zhiyu Liu, Nick Rekuski
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Fix a polarised Calabi-Yau threefold $(X,H)$. We reduce a version of the Bayer-Macr\`i-Toda conjecture for $(X,H)$, which ensures the existence of Bridgeland stability conditions on $X$, to verifying a Brill-Noether-type inequality for curves on $X$. We then prove this inequality for a broad class of Calabi-Yau threefolds, including complete intersection Calabi-Yau threefolds in weighted projective spaces.
topic: algebraic-geometry
tags:
- stability
- vector-bundles-sheaves
- chern-classes
- calabi-yau-geometry
arxiv_id: 2509.24990v3
arxiv_url: https://arxiv.org/abs/2509.24990
arxiv_submitted: '2025-09-29'
arxiv_updated: '2026-11-02'
summary: Calabi–Yau三次元多様体のBridgeland安定性条件を、内部の曲線上における安定層の切断数評価へ還元する。小さな傾きだけのBogomolov–Gieseker型不等式で足りることを示し、重み付き完全交叉などを統一的に扱う。
abstract_en: ''
summary_en: A curve inside a polarized Calabi–Yau threefold provides the numerical test developed in this paper. The relevant curve invariant records sections per rank near a specific slope. Controlling it gives a strengthened inequality for sheaves on the threefold and then geometric Bridgeland stability conditions. The method allows a correction cycle, so it does not claim the unmodified inequality in every example.
abstract_ja: 偏極付きCalabi–Yau三次元多様体について、Bridgeland安定性条件の存在を導くBayer–Macrì–Toda予想の修正版を、多様体上の曲線に対するBrill–Noether型不等式の検証へ還元する。さらにこの曲線の不等式を広い範囲の例で証明し、重み付き射影空間内の完全交叉Calabi–Yau三次元多様体などへ適用する。
abstract_source_url: https://arxiv.org/abs/2509.24990
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2509.24990v3](https://arxiv.org/abs/2509.24990)
- **著者:** Soheyla Feyzbakhsh, Naoki Koseki, Zhiyu Liu, Nick Rekuski
- **初回投稿日:** 2025-09-29
- **最終更新日:** 2026-11-02
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

三次元多様体の導来圏にBridgeland安定性条件を構成する方法の一つは、安定層のChern指標に対する強い不等式を示すことである。Calabi–Yau三次元多様体では従来、個々の例に応じた計算が必要であり、統一的な入口が不足していた。

本論文は問題を一段ずつ低次元化し、最終的に一本の曲線上の安定層の切断数を調べればよい条件を与える。三次元上ですべての傾きの層に強い評価を課す代わりに、零に十分近い正の傾きに集中することが特徴である。

得られるのは補正1-cycleを許す修正版のBMT不等式である。補正を最小化することと、ある補正のもとで安定性条件が存在することは区別される。重み付き完全交叉、Fano多様体の反標準因子、巡回被覆などに統一的な応用を与える。

## 背景と問題設定

$X$は滑らかな射影三次元多様体で$K\_X=0$、$H^1(X,\mathcal O\_X)=0$を満たし、$H$は豊富な因子とする。論文は次の条件$\mathrm{BG}\_3(\epsilon)$を用いる。すべての$H$-安定層$E$について

$$
0<\operatorname{ch}\_1(E)H^2\leq\epsilon\operatorname{ch}\_0(E)H^3
\quad\Longrightarrow\quad
\operatorname{ch}\_2(E)H<-\frac12\operatorname{ch}\_1(E)H^2
$$

が成り立つという条件である。これは小さな正の傾きの範囲での改善であり、任意の安定層に同じ不等式を要求するものではない。

## 主結果

### 小傾き不等式から安定性条件へ（Theorem 1.1）

ある$\epsilon>0$について$\mathrm{BG}\_3(\epsilon)$が成立すれば、$\Gamma\cdot H\geq0$を満たす1-cycle $\Gamma$が存在し、修正版$\Gamma$-BMTが成立する。特に$D^b(X)$上に幾何的Bridgeland安定性条件の族が存在する。「幾何的」とは各点の構造層が同じ位相の安定対象になることを意味する。補正$\Gamma$の選択の自由度が、必要な層の評価を弱める鍵である。

### 一本の曲線による判定（Theorem 1.3）

滑らかな$S\in|H|$と滑らかな$C\in|H|\_S|$が存在し、

$$
\mathrm{BN}\_C<\chi(\mathcal O\_X(H))
$$

ならば$\mathrm{BG}\_3(\epsilon)$がある$\epsilon>0$で成立し、前定理が適用できる。算術種数$g$の整射影曲線に対するDefinition 1.2の量は

$$
\mathrm{BN}\_C=\limsup\_{t\to0^+}\left\lbrace \frac{h^0(E)}{\operatorname{rk}(E)}:
 E\text{ は }C\text{ 上の安定層},\
\frac{\deg E}{\operatorname{rk}(E)}\in(g-1-t,g-1+t)\right\rbrace
$$

である。曲線上の傾き$g-1$近傍の切断数を制御することで、三次元の導来圏へ到達する。

### 統一的な適用範囲（Theorem 1.4）

上記の$\Gamma$-BMTを、次の偏極付きCalabi–Yau三次元多様体で示す。

- 重み付き射影空間内の一般の準滑らかな完全交叉で、$H$がPicard群の生成元となるもの。
- 指数$r$のFano四次元多様体$M$の一般の反標準因子で、$H=(-K\_M/r)|\_X$とするもの。ただし$r\geq3$、または$r=2$かつ$\rho(M)=1$。
- 指数$r$のFano三次元多様体$Y$の巡回被覆$\pi:X\to Y$で、$H=\pi^\ast (-K\_Y/r)$とするもの。ただし$r\geq2$、または$r=1$かつ$\rho(Y)=1$。

Introductionはその後の一般的な安定性条件の存在結果にも触れ、本論文の不等式と大体積極限近傍のより弱い結果を区別する。また、Picard群が非常に豊富な線束で生成される一般のCalabi–Yau三次元多様体への曲線判定の拡張は予想として残す。

## 証明の見取り図

$\Gamma\cdot H$を十分大きく選べることを利用し、小傾きの$\mathrm{BG}\_3$から$\Gamma$-BMTへ進む。次に層を$S\in|H|$に制限し、Harder–Narasimhan因子の傾きを制御して曲面上の不等式へ還元する。従来の$|2H|$への制限に対し、小傾きに限定することで$|H|$を使える。

さらに$C$へ制限すると、二次Chern指標の制御が切断数の制御へ置き換わる。曲線の具体的な幾何、または別の曲面への埋め込みから$\mathrm{BN}\_C$を評価し、曲線、曲面、三次元の順に不等式を戻していく。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2509.24990)
- **Introduction:** [PDF](https://arxiv.org/pdf/2509.24990v3) — Section 1, pp. 1–5（数学的説明はpp. 1–4）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3, 1.4; Definition 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2509.24990v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
