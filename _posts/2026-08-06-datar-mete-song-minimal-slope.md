---
layout: paper
title: "On the Datar-Mete-Song minimal slope conjecture"
title_ja: "Datar--Mete--Song の最小 slope 予想について"
authors: "Xin Fu"
topic: algebraic-geometry
tags:
  - birational-geometry
  - stability
  - toric-geometry
arxiv_id: "2608.01198v2"
arxiv_url: "https://arxiv.org/abs/2608.01198"
arxiv_submitted: "2026-08-02"
arxiv_updated: "2026-08-05"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.AP
  - math.CV
summary: >-
  コンパクト Kähler 多様体上の二つの Kähler 類について、$J$-slope 半安定性が双有理テスト類で定義される最小 $J$-slope と位相的 slope の一致と同値であるという Datar--Mete--Song 予想を証明する。さらに半安定なトーリック Kähler 多様体では最適不安定化部分多様体の集合が解析的であり、不変な場合の弱解が大トーラス上で滑らかになることを示す。
abstract_en: ""
summary_en: >-
  This work proves the Datar--Mete--Song numerical characterization of semistability for a pair of Kähler classes. It compares the topological $J$-slope with slopes of big and nef classes obtained from birational modifications, showing equality in the semistable case and a strict drop in the unstable case. The paper also studies the locus of subvarieties attaining equality and proves its analyticity for compact toric Kähler manifolds. For torus-invariant data, a known weak solution of the $J$-equation is shown to be smooth and Kähler on the dense algebraic torus.
abstract_ja: >-
  Kähler 類の対の $J$-slope 半安定性を、双有理修正上の big and nef テスト類から得られる最小 slope によって特徴づける。半安定なら全テスト slope が位相的 $J$-slope 以上であり、不安定なら真に小さいテスト slope が存在する。また、半安定なトーリック Kähler 多様体の最適不安定化部分多様体を調べ、トーラス不変の場合には $J$ 方程式の弱解の大トーラス上での正則性を得る。
abstract_source_url: "https://arxiv.org/abs/2608.01198"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.01198v2](https://arxiv.org/abs/2608.01198)
- **著者:** Xin Fu
- **初回投稿日:** 2026年8月2日
- **最終更新日:** 2026年8月5日（v2）
- **主分類・副分類:** Algebraic Geometry (math.AG), Analysis of PDEs (math.AP), Complex Variables (math.CV)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$J$ 方程式は Donaldson の moment map の枠組みから生じる $J$-flow の臨界点方程式であり、その可解性は Kähler 類の交点数と部分多様体上の slope 条件に結び付く。安定な場合には射影・Kähler の双方で数値条件と滑らかな解の存在の関係が確立されているが、等号を許す半安定領域や不安定領域をどう測るかが次の問題となる。

Datar--Mete--Song は、双有理修正上の big and nef テスト類を走る「最小 $J$-slope」を導入し、Kähler 類の対の半安定性が、この最小値と位相的 $J$-slope の一致で特徴づけられると予想した。次元 $2$ では既知だったが、任意次元では双有理モデル全体の slope と、元の多様体の全ての部分多様体に対する条件を比較する必要があった。

本論文はこの予想を任意次元で証明する。半安定なら全ての許容される big and nef テストの slope が位相的 slope 以上になり、自明なテストと合わせて最小 slope は位相的 slope に一致する。不安定なら真に小さい slope のテストが存在する。

さらに、半安定対で等号を達成する部分多様体からなる最適不安定化 locus を調べる。コンパクト toric Kähler 多様体ではこれが解析的部分集合となり、類が torus 不変なら既知の弱解が稠密な大 torus 上で滑らかかつ Kähler になる。一方、locus の外全体での高階正則性、および不安定な場合の弱解は未解決として残る。

## 背景と問題設定

$X$ を複素次元 $n$ のコンパクト Kähler 多様体、$\alpha,\beta$ を Kähler 類とする。$\omega\in\beta$ に対し、$J$ 方程式は $\chi\in\alpha$ を

$$
n\,\chi^{n-1}\wedge\omega
=\mu(\alpha,\beta)\chi^n,
\qquad
\mu(\alpha,\beta)=n\frac{\alpha^{n-1}\cdot\beta}{\alpha^n}
$$

となるよう求める。$d$ 次元既約解析的部分多様体 $Z\subset X$ に対して

$$
\mu_Z(\alpha,\beta)
=d\frac{\alpha^{d-1}\cdot\beta\cdot Z}{\alpha^d\cdot Z}
$$

と置くと、半安定性は全ての $1\leq d<n$ と $Z$ について

$$
d\,\alpha^{d-1}\cdot\beta\cdot Z
\leq \mu(\alpha,\beta)\,\alpha^d\cdot Z
$$

が成り立つこととして定義される。

双有理修正 $\pi:Y\to X$ と有効 $\mathbb R$-因子 $D$ を取り、$L=\pi^*\alpha-[D]$ が big and nef のとき、テスト slope と最小 slope は

$$
\mu_L(\alpha,\beta)
=n\frac{L^{n-1}\cdot\pi^*\beta}{L^n},
\qquad
\zeta_{\min}(\alpha,\beta)=\inf_{\pi,D}\mu_L(\alpha,\beta)
$$

である。恒等写像と $D=0$ は許容されるので、常に $\zeta_{\min}\leq\mu$ である。

## 主結果

### 最小 slope による半安定性の特徴づけ（Theorem 1）

結論は、$(\alpha,\beta)$ が半安定であることと

$$
\zeta_{\min}(\alpha,\beta)=\mu(\alpha,\beta)
$$

が同値だという Datar--Mete--Song 予想の肯定である。より具体的に、半安定なら全ての許容される $\pi:Y\to X$, $D$, $L$ に対して

$$
nL^{n-1}\cdot\pi^*\beta\geq\mu L^n
$$

が成立する。逆に半安定でなければ

$$
\zeta_{\min}(\alpha,\beta)<\mu
$$

となる。後者は projective かつ polarized な場合には Datar--Mete--Song により既知であり、本論文は Kähler の一般設定で特徴づけを完成する。

### 最適不安定化 locus と toric の場合（Theorem 3）

半安定対について、等号を達成する既約部分多様体の合併を

$$
\operatorname{Dest}_{\mathrm{opt}}(\alpha,\beta)
=
\bigcup_{\substack{Z\subsetneq X\ \mathrm{irreducible}\\1\leq\dim Z\leq n-1,\ \mu_Z=\mu}} Z
$$

とする。$X$ が toric Kähler 多様体なら、この集合は解析的部分集合である。さらに $\alpha,\beta$ が torus 不変なら、$J$ 方程式の弱解 $T$ を稠密な大 torus $(\mathbb C^*)^n$ 上で滑らかかつ Kähler に選べる。

ただし Introduction は、$\operatorname{Dest}_{\mathrm{opt}}$ の外全体における $T$ の高階正則性は torus 不変の場合でも証明できていないと明記する。また、最小 slope を右辺とする弱 $J$ 方程式の不安定な場合は未解決である。

## 証明の見取り図

Introduction は、安定領域の $J$ 方程式について Chen、Datar--Pingali、Song による数値判定と存在結果を背景として挙げ、Datar--Mete--Song が半安定・不安定領域へ問題を拡張したことを説明する。ただし Theorem 1 の具体的な証明手順は Introduction 内では示されておらず、直後の Section 2 が Theorem 1 の証明を担う。

したがって、Abstract と Introduction に限定するこの記事では、既知の安定理論と最小 slope の双有理テストを比較して半安定性の数値的特徴づけへ至る、という位置づけまでを確認範囲とする。relative envelope や非 pluripolar 積を用いる後続節の技術的手順は、ここでは証明の見取り図として再構成しない。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.01198v2](https://arxiv.org/abs/2608.01198v2)
- **Introduction:** Section 1, pp. 1--4
- **主要定理:** Theorem 1, Theorem 3
- **既知結果として引用:** Theorem 2 (Murakami)
- **予想:** Conjecture 1, Conjecture 2
- **証明方針:** Introduction には詳細な sketch なし。Theorem 1 の証明は Section 2 と案内される
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0
- **source_scope:** Abstract and Introduction
