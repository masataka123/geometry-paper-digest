---
layout: paper
title: Canonical extensions of ruled surfaces over elliptic curves
title_ja: 楕円曲線上の線織曲面のcanonical extension
authors: Francesco Antonio Denisi, Andreas Höring
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: |-
  Let $L$ be a line bundle of negative degree on an elliptic curve $E$. While the ruled surface $M := \mathbb P(\mathcal O_E \oplus L)$ is one of the simplest varieties in algebraic geometry, its tangent bundle $T_M$ is surprisingly complex: we first show that the ring of symmetric tensors is not finitely generated. We then construct a holomorphic function on the canonical extension $Z_M$ which allows us to show that $Z_M$ is not Stein.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- positivity
- stein-geometry
arxiv_id: 2610.03048v1
arxiv_url: https://arxiv.org/abs/2610.03048
arxiv_submitted: '2026-10-02'
arxiv_updated: '2026-10-02'
summary: |-
  楕円曲線上の負次数の直線束から得られる線織曲面について、任意のKähler類に対応するcanonical extensionがSteinでないことを示す。接束はbigでも対称テンソルの環は有限生成でなく、従来の双有理的手法を直接適用できない。これにより、canonical extensionのStein性と接束のnef性を結ぶ予想が射影曲面で成立する。
abstract_en: ''
summary_en: |-
  The paper resolves the remaining ruled-surface case of a proposed link between tangent-bundle positivity and canonical extensions. For the surfaces under consideration, abundant symmetric tensors do not produce a finitely generated section algebra. The authors instead study holomorphic functions on the extension directly. Their obstruction, combined with earlier results, completes the conjectural characterization for projective surfaces.
abstract_ja: |-
  楕円曲線 $E$ 上の負次数の直線束 $L$ に対し、線織曲面 $M=\mathbb P(\mathcal O_E\oplus L)$ の接束とcanonical extensionを調べる。接束はbigである一方、大域的対称テンソルの次数付き環は有限生成でない。著者らはcanonical extension上に正則関数を直接構成し、その特殊ファイバーを用いてStein性を否定する。
abstract_source_url: https://arxiv.org/abs/2610.03048
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.03048v1](https://arxiv.org/abs/2610.03048)
- **著者:** Francesco Antonio Denisi, Andreas Höring
- **初回投稿日:** 2026-10-02
- **最終更新日:** 2026-10-02
- **主分類・副分類:** math.AG（主分類）、math.CV（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体の接束の正値性は、曲率、射影束上の直線束、大域的対称テンソルなど異なる立場から測れる。本論文は、楕円曲線上の分解型の線織曲面という具体的な対象を通じて、それらの関係を調べる。

主結果は、負次数の直線束から作る曲面のcanonical extensionが、どのKähler類を選んでもSteinにならないというものである。この場合の接束はnefではなく、Stein性とnef性が同値だとする予想に合致する。既知の結果と合わせると、射影曲面について予想が完結する。

同時に、接束がbigであっても対称テンソル環が有限生成とは限らないことを示す。これは単なる付随例ではなく、有限生成性を使って弱Fanoモデルへ移る既存の証明方針が、この曲面では使えない理由になっている。著者らは普遍被覆の具体的表示から正則関数を作ることで、この障害を越える。

## 背景と問題設定

$E$ を楕円曲線、$L$ を $\deg L<0$ の直線束とし、$M=\mathbb P(\mathcal O_E\oplus L)$ と置く。Kähler類 $\omega\in H^1(M,\Omega_M^1)$ は拡大

<div>
$$
0\longrightarrow\mathcal O_M\longrightarrow V^\omega\longrightarrow T_M\longrightarrow0
$$
</div>

を定める。canonical extensionは

<div>
$$
Z_M^\omega=\mathbb P(V^\omega)\setminus\mathbb P(T_M)
$$
</div>

であり、余接束をモデルとするアフィン束である。IntroductionのConjecture 1.1は、一般の射影多様体で $Z_M^\omega$ がSteinであることと $T_M$ がnefであることの同値を予想する。曲面の場合、未解決部分は楕円曲線上の線織曲面に残っていた。

## 主結果

### 主定理1：canonical extensionの非Stein性（Theorem 1.2）

上の $M$ と任意のKähler類 $\omega$ に対し、$Z_M^\omega$ はSteinではない。仮定の要点は、底が楕円曲線であり、線織曲面が負次数の $L$ を用いた分解型であることにある。特定のKähler類だけの反例ではない。

### 曲面での予想の決着（Corollary 1.3）

射影曲面についてConjecture 1.1が成立する。すなわち、canonical extensionのStein性は接束のnef性と同値である。これはTheorem 1.2だけから全曲面を直接扱う主張ではなく、Introductionが挙げるHöring–PeternellとMüllerの先行結果を組み合わせた帰結である。

### 主定理2：bigな接束と非有限生成性（Theorem 1.4）

同じ曲面では $T_M$ がbigであるにもかかわらず、

<div>
$$
R(M,T_M)=\bigoplus_{k\in\mathbb N}H^0(M,S^kT_M)
$$
</div>

は有限生成でない。大域切断が豊富に存在することと、それらを有限個の生成元で制御できることの違いを具体化する結果である。

## 証明の見取り図

Introduction §1.Bは、対称テンソル環の有限生成性を必要とする弱Fanoモデルの手法が使えないことを最初に説明する。その代わり、$\deg L=-1$ の場合に普遍被覆を $\widetilde Z_M\simeq\mathbb C^2\times Q$（$Q$ はアフィン二次曲面）と表示し、$L^*$ のfactor of automorphyで基本群の作用を記述する。

この表示から正則関数 $\mu:Z_M\to\mathbb C$ を構成し、Steinでない特殊ファイバーを見つける。一般の負次数は適切な被覆を使って帰着する。ここではIntroductionが述べるProposition 4.2とTheorem 5.1の役割を紹介し、その後の構成や証明自体は検証していない。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2610.03048)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2610.03048v1)、Section 1, pp. 1–3。
- **Introduction中で言及された主要結果:** Conjecture 1.1、Theorems 1.2・1.4、Corollary 1.3。
- **論文構成の説明:** §1.B, pp. 2–3の証明方針。
- **確認したarXivバージョン:** 2610.03048v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。
