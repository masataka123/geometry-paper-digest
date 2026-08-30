---
layout: paper
title: "Entire curves in C-pairs with large irregularity"
title_ja: "不正則度の大きいC対上の整曲線"
authors: "Stefan Kebekus, Erwan Rousseau"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.CV]
arxiv_abstract: >-
  This paper extends the fundamental theorem of Bloch-Ochiai to the context of C-pairs: If (X, D) is a C-pair with large irregularity, then no entire C-curve in X is ever dense. In its most general form, the paper's main theorem applies to normal Kähler pairs with arbitrary singularities. However, it also strengthens known results for compact Kähler manifolds without boundary, as it applies to some settings that the classic Bloch-Ochiai theorem does not address. The proof builds on the work of Kawamata, Ueno, and Noguchi, recasting parabolic Nevanlinna theory as a "Nevanlinna theory for C-pairs". We hope the approach might be of independent interest.
topic: algebraic-geometry
tags: [hyperbolicity, complex-analytic-spaces]
arxiv_id: "2410.01245v2"
arxiv_url: "https://arxiv.org/abs/2410.01245"
arxiv_submitted: "2024-10-02"
arxiv_updated: "2024-11-11"
summary: >-
  Bloch–Ochiaiの整曲線退化定理をCampanaのC対へ拡張する。コンパクトKähler正規空間上のC対でaugmented Albanese irregularityが次元を超えるなら、全てのentire C-curveの像はZariski稠密でないことを示す。
abstract_en: ""
summary_en: >-
  The paper develops a Bloch–Ochiai type degeneracy statement for Campana pairs. Its numerical hypothesis uses the augmented Albanese irregularity, which incorporates adapted differentials on covers and may exceed ordinary irregularity. When this invariant is larger than the dimension of a compact normal Kähler space, every entire curve respecting the pair multiplicities has a non-dense algebraic image. The argument adapts parabolic Nevanlinna theory and the Albanese method to the setting of C-pairs.
abstract_ja: >-
  Bloch–Ochiaiの基本定理をC対へ拡張する。大きなaugmented Albanese irregularityをもつC対$(X,D)$では、entire C-curveの像は稠密にならない。主定理は任意の特異点を許す正規Kähler空間に適用でき、境界のない滑らかな場合でも古典定理より広い状況を含む。証明はKawamata、Ueno、Noguchiの方法を基礎に、放物型Nevanlinna理論をC対のNevanlinna理論として組み直す。
abstract_source_url: "https://arxiv.org/abs/2410.01245"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2410.01245v2](https://arxiv.org/abs/2410.01245v2)
- **著者:** Stefan Kebekus, Erwan Rousseau
- **初回投稿日:** 2024年10月2日
- **最終更新日:** 2024年11月11日
- **主分類・副分類:** math.AG（主分類）、math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bloch–Ochiai定理は、射影多様体$X$の不正則度$q(X)$が$\dim X$より大きければ、任意の整曲線$\mathbb C\to X$が代数的に退化することを述べる。本論文は、この原理を境界の多重度を記憶するCampanaのC対へ移す。

C対$(X,D)$では、曲線は境界成分との交点で指定された下限以上の接触次数をもつC射でなければならない。また通常の不正則度の代わりに、適合被覆上の微分形式に由来するaugmented Albanese irregularity $q^+_{\rm Alb}(X,D)$を用いる。

主定理は$X$がコンパクトKähler正規空間であればよく、滑らかさを仮定しない。境界が空でも$q(X)\leq q^+_{\rm Alb}(X,0)$であるため、古典的Bloch–Ochiai定理が届かない例にも適用できる。

この結論は、C対の特殊性とZariski稠密なentire C-curveの存在を結ぶCampana予想が、大きなaugmented Albanese irregularityに対して予測する向きと一致する。ただし論文が示すのはこの数値条件下の非稠密性であり、予想全体の解決ではない。

## 背景と問題設定

C対の境界は

$$
D=\sum_i\frac{m_i-1}{m_i}D_i,
\qquad m_i\in\mathbb N_{\geq2}\cup\{\infty\}
$$

の形をもつ。滑らかな素因子一つの場合、entire C-curve $\gamma:\mathbb C\to X$には概略

$$
\gamma^*D_i\geq m_i\,\operatorname{supp}(\gamma^*D_i)
$$

という接触条件が課される。代数的退化とは像が$X$でZariski稠密でないことをいう。

## 主結果

### C対版Bloch–Ochiai定理（Theorem 1.7 / Proposition 5.2）

$(X,D)$を、$X$がコンパクトKähler空間であるC対とする。このとき

$$
q^+_{\rm Alb}(X,D)>\dim X
$$

なら、全てのentire C-curve $(\mathbb C,0)\to(X,D)$は代数的に退化する。$X$は正規であればよく、$q^+_{\rm Alb}(X,D)=\infty$の場合も含む。

通常のコンパクトKähler多様体では

$$
q(X)\leq q^+_{\rm Alb}(X,0)
$$

なので、定理は境界なしの場合にも古典定理を強化し得る。

## 証明の見取り図

古典的証明ではAlbanese像をその安定化部分アーベル多様体で割り、一般型の像上の整曲線をNevanlinna理論で制御する。本論文はKawamataとUenoのAlbanese的方法をC-semitoricな設定へ移し、Noguchiらの放物型Nevanlinna理論を分岐被覆とC対の接触条件に適合させる。これにより高い不正則度を一般型方向の非稠密性へ変換する。

## 原論文との対応

- **Abstractページ:** [arXiv:2410.01245v2](https://arxiv.org/abs/2410.01245v2)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.7; Conjecture 1.11
- **論文構成の説明:** Section 1.5, pp. 3–4
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
