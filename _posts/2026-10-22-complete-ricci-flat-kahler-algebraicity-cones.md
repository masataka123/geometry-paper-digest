---
layout: paper
title: On complete Ricci--flat Kähler manifolds
title_ja: 完備Ricci平坦Kähler多様体の代数性と無限遠錐
authors: Song Sun, Junsheng Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: We study complete noncompact Ricci-flat K\"ahler manifolds. In the case of Euclidean volume growth, we prove that the underlying complex manifold is naturally quasi-projective and that the asymptotic cone is unique. Moreover, we establish no semistability at infinity and prove convergence to the asymptotic cone at a polynomial rate. In the case of sub-Euclidean volume growth, we construct complete Ricci-flat K\"ahler threefolds with bounded sectional curvature and finite topological type that admit no K\"ahler compactification.
topic: differential-geometry
tags:
- noncompact-kahler-geometry
- metric-limits
- kahler-einstein-metrics
- k-stability
- l2-methods
arxiv_id: 2610.29891v1
arxiv_url: https://arxiv.org/abs/2610.29891
arxiv_submitted: '2026-10-21'
arxiv_updated: '2026-10-21'
summary: Euclid体積増大をもつ完備Ricci平坦Kähler多様体が、正規アフィン多様体の射影的crepant解消となることを示す。無限遠錐の一意性と多項式速度での収束も得る一方、体積増大がそれより小さい場合には、有限位相型かつ有界曲率でもKählerコンパクト化できない複素三次元の例を構成する。
abstract_en: ''
summary_en: The geometry at infinity of a complete Ricci-flat Kähler manifold can determine its algebraic structure. This paper obtains an affine algebraization and a unique limiting cone from Euclidean volume growth without a curvature-decay hypothesis. It also identifies the intermediate algebraic cone and quantifies convergence to the metric cone. A separate three-dimensional construction shows that finite topology and bounded curvature alone do not ensure a Kähler compactification.
abstract_ja: 完備非コンパクトRicci平坦Kähler多様体の複素幾何と無限遠の構造を調べる。Euclid体積増大の場合、曲率の二次減衰を追加仮定せずに準射影性と漸近錐の一意性を示し、二段階退化の中間錐が最終錐に一致すること、多項式速度で錐へ収束することを証明する。他方、sub-Euclid体積増大では、断面曲率が有界で有限位相型をもつにもかかわらず、コンパクトKähler多様体へ正則開埋め込みできないRicci平坦Kähler三次元多様体を構成する。
abstract_source_url: https://arxiv.org/abs/2610.29891
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.29891v1](https://arxiv.org/abs/2610.29891)
- **著者:** Song Sun, Junsheng Zhang
- **初回投稿日:** 2026-10-21
- **最終更新日:** 2026-10-21
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

完備Ricci平坦Kähler計量の存在は、その非コンパクトな複素多様体をどれほど代数的に制限するのか。本論文は、Euclid空間と同じ次数の体積増大がある場合に、曲率減衰条件を追加せずに強い代数化定理を与える。

その代数化は多項式増大の正則関数全体から自然に得られる。さらに無限遠で見える錐が一意であるだけでなく、代数的な退化の中間段階もこの錐に一致し、距離空間として多項式速度で近づくことを示す。従来の二次曲率減衰仮定を外すことが中心的な進展である。

一方、有限位相型ならコンパクトKähler多様体の因子の補集合として理解できる、という期待は一般には成立しない。著者らは有界曲率まで保ちながらKählerコンパクト化を許さない例を構成し、Euclid体積増大の側と明確な対照を示す。

## 背景と問題設定

Introductionは、非コンパクトRicci平坦Kähler多様体をKähler–Einstein計量の特異性モデルとして位置付け、複素Monge–Ampère方程式の完備解と複素幾何の関係を問題にする。従来の無限遠の二段階退化理論は、二次曲率減衰やKähler形式の大域的な $\sqrt{-1}\partial\bar\partial$ 完全性などの追加条件の下で知られていた。

本論文の最初の二定理ではEuclid体積増大だけを仮定する。最後の構成では実次元六に対し体積増大が五次となり、同じ仮定の下での反例ではない。

## 主結果

### 多項式増大関数による代数化（Theorem 1.1）

Euclid体積増大をもつ完備Ricci平坦Kähler多様体 $X^n$ 上で、多項式増大の正則関数の環 $R(X)$ は有限生成であり、評価写像

$$
\pi:X\longrightarrow X'=\operatorname{Spec}R(X)
$$

は正規アフィン多様体の射影的crepant解消となる。特に $X$ は準射影的である。無限遠の漸近錐 $C$ は正則等長同型を除いて一意であり、平坦な $\mathbb Q$-Gorenstein族において

$$
X'\rightsquigarrow W=\operatorname{Spec}(\operatorname{gr}\_vR(X))\rightsquigarrow C
$$

という二段階退化をもつ。第一段階は無限遠の増大率によるフィルトレーション、第二段階はReebベクトル場が生成するトーラスと同変な退化である。

### 中間錐の同定と収束速度（Theorem 1.2）

同じ仮定の下で $W$ と $C$ はFano錐として同型である。したがって中間錐から最終錐への非自明な段階は不要になる。さらに、ある $A,\varepsilon>0$ に対して

$$
d\_{\mathrm{pGH}}\bigl((\overline B\_g(p,r),r^{-1}d\_g,p),
(\overline B\_C(O,1),d\_C,O)\bigr)\leq A r^{-\varepsilon}\qquad(r\geq1).
$$

ここでは錐の記号 $C$ と定数を区別するため、原文の上界定数を $A$ と書いた。「無限遠での半安定性がない」という表現はこの中間錐の同定を指し、任意の束の半安定性についての主張ではない。

### Kählerコンパクト化できない三次元の例（Theorem 1.3）

$1+1/\sqrt2<\nu<2$ とし、整関数と三次元多様体を

$$
F(z)=\prod\_{j=1}^{\infty}\left(1-\frac{z}{j^\nu}\right),\qquad
X\_F=\lbrace tp-sq=2F(z)\rbrace \subset\mathbb C\times
\operatorname{Tot}\bigl(\mathcal O\_{\mathbb P^1}(-1)^{\oplus2}\bigr)
$$

で定める。$[s:t]$ は $\mathbb P^1$ の斉次座標である。$X\_F$ は $S^2$ 上の実階数四のベクトル束の全空間と微分同相で有限位相型をもち、コンパクトKähler多様体への正則開埋め込みを許さない。

それにもかかわらず、$X\_F$ は完備Ricci平坦Kähler計量 $g$ をもち、

$$
\sup\_{X\_F}|\operatorname{Rm}(g)|\_g<\infty,\qquad
cR^5\leq\operatorname{Vol}\_gB\_g(x,R)\leq CR^5\quad(x\in X\_F,\ R\geq1)
$$

が成り立つ。その測度付き漸近錐は一意で、単位球の測度を一に正規化したLebesgue測度をもつ $\mathbb R^5$ である。曲率を保った収束については例外的な閉錐を除くという限定があり、全域の滑らかな収束と読むべきではない。

## 証明の見取り図

代数化の解析的入力は大域的な重み付き $\bar\partial$ 評価である。重みの多重劣調和性を要求せず、Bochner公式の勾配項と漸近錐のスペクトル情報から評価を作り、多項式増大の正則関数を構成する。

中間錐の同定には、元の計量の近似Kählerポテンシャルを退化先の正則部分へ移す。Reebトーラスによる平均化と鋭い等周不等式を用い、体積錐から距離錐への移行を定量化する。錐の正則部分だけで得た計量からK-polystabilityを導くためにはポテンシャルのpropernessが必要で、準正則商上の多重ポテンシャル論がその確認を担う。

反例の側では、非線形Gibbons–Hawking構成の線形化に現れるGreen currentから近似計量を作る。その後、特異集合に横断的な方向の減衰を改善し、障壁を組み合わせて複素Monge–Ampère方程式を解く、という経路がIntroductionに説明されている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.29891)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.29891v1) — Abstract p. 1；Section 1, pp. 2–4
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.29891v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
